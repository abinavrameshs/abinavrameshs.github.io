---
title: Implementation of Data trigerred workflow in Apache Oozie
subtitle: Apache Oozie, Hadoop, Shell, Workflows, Coordinators
image: assets/img/portfolio/oozie_logo.png
alt: Implementation of Data trigerred workflow in Apache Oozie

caption:
  title: Implementation of Data trigerred workflow in Apache Oozie
  subtitle: Apache Oozie, Hadoop, Shell, Workflows, Coordinators
  thumbnail: assets/img/portfolio/oozie_logo.png
---

The objective of this project is to design a data-trigerred workflow. A workflow is launched daily, which is dependent on 2 input data sources (Lets call them `ds_input1` and `daily_feed`). 

The workflow for the current day is trigerred only if the complete data for the past 3 days for `ds_input1` is present and if the complete data for the past 2 days for `daily_feed` is present. The implementation of such a schedule is present under `workflow/coordinator.xml`

For more information please visit the Github link : 

[Github](https://github.com/abinavrameshs/Data-dependent-workflow)


{:.list-inline}
- Category: Apache Oozie, Hadoop, Shell, Workflows, Coordinators
- Tools: Apache Oozie, Hadoop, Shell

