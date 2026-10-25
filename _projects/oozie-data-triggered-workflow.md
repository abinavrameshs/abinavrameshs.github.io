---
title: "Data-Triggered Workflow in Apache Oozie"
slug: oozie-data-triggered-workflow
order: 8
featured: false
category: "Data Engineering"
summary: "An Oozie coordinator that starts the daily workflow only after three days of one feed and two days of another have fully landed."
image: assets/img/portfolio/oozie-workflow.svg
alt: "Data-Triggered Workflow in Apache Oozie"
tags: ["Apache Oozie", "Hadoop HDFS", "Hive", "Impala", "Kerberos", "Shell"]
github: https://github.com/abinavrameshs/Data-dependent-workflow
---

## The problem

A daily batch job is usually scheduled by time: "run at 2 AM". But if an upstream feed arrives late or only partly, a time-triggered job runs anyway, on incomplete data, and silently produces wrong output.

This project schedules the job by **data availability** instead. Apache Oozie only starts each day's run once all the input data it depends on has landed.

## The rule

Each daily run depends on two input datasets in HDFS, stored in date-partitioned folders (`.../YYYY-MM-DD`):

| Input | Must be complete for |
| --- | --- |
| `ds_input1` | the **previous 3 days** |
| `daily_feed` | the **previous 2 days** |

If any of those five daily folders is missing or incomplete, Oozie waits. As soon as the last one arrives, the run starts, and it writes to that day's `output_feed` folder.

## How it's built

### Coordinator (`coordinator.xml`)

- **Datasets.** Each input is declared as a daily dataset with a URI template like `/user/<user>/ds_input1/${YEAR}-${MONTH}-${DAY}`.
- **Done flags.** A folder only counts as complete once a marker file exists. `ds_input1` uses a custom `_trigger` file, and `daily_feed` uses Hadoop's default `_SUCCESS` file. This avoids picking up a folder that is still being written.
- **Input windows.** `coord:current(-3)` to `current(-1)` and `current(-2)` to `current(-1)` express "the last three days" and "the last two days" relative to each run's date.
- **Controls.** Runs execute in FIFO order with up to 3 running at once, so a backlog clears in date order after an outage.
- **Parameters passed to the workflow:** the run date, offsets such as the previous month and two days back, the exact input folders that satisfied the dependency, and the output folder.

### Workflow (`workflow.xml`)

1. A **shell action** runs the processing script. It receives every coordinator parameter and authenticates to the Kerberos-secured cluster with a keytab, so it can query Hive and Impala.
2. On success an **email action** sends a success notice. On any failure an email alert goes out and the workflow is killed, so failures are never silent.
3. A Hive2 action is also sketched out (commented out) for future SQL steps.

### Deployment scripts

- `bin/run_workflow.sh` validates the workflow XML, uploads it to HDFS with the keytab, and runs it **once**, which is useful for testing.
- `bin/stage_coordinator.sh` validates the coordinator, uploads everything, sets HDFS permissions on the input and output folders, and **stages the recurring schedule** from `coordinator.properties`.

## Why it matters

Data-triggered scheduling makes a pipeline **correct by construction**: output for a day is only produced from complete inputs, late data simply delays the run instead of corrupting it, and a missed day is replayed automatically once its data appears.
