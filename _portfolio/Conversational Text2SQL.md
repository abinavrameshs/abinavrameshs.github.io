---
order: 1
caption: #what displays in the portfolio grid:
  title: Conversational Text2SQL
  subtitle: Gen AI, LLMs, Streamlit, SQL
  thumbnail: assets/img/portfolio/text2sql.svg

#what displays when the item is clicked:
title: Conversational Text2SQL
subtitle: Gen AI, LLMs, Streamlit, SQL
image: assets/img/portfolio/text2sql.svg #main image, can be a link or a file in assets/img/portfolio
alt: Conversational Text2SQL

---

## Objective

Talk to your database in plain English - **"Talk with your tables!"** A user types a question, picks the target database, and gets back an accurate, ready-to-run SQL query, generated and validated by an LLM, through a Streamlit UI.

## Architecture

The project is structured as a proper installable Python package (`src/conversational_txt2sql/`) rather than a single script, with each concern split out:

<u><b>Schema-aware prompting</b></u> :
`prompt.py` builds a detailed prompt for the LLM using the user's question, the database schema, column-level descriptions, and a knowledge-base of domain context - so the model generates SQL grounded in the real table structure instead of guessing column names.

<u><b>Unified LLM client</b></u> :
`call_api.py` provides a single API client that can call OpenAI (or other LLMs), supporting both plain-text and structured output.

<u><b>Main pipeline</b></u> :
`main_pipeline.py` orchestrates the flow end-to-end: take the question, build the prompt, call the LLM, extract the SQL, and execute it against the target database.

<u><b>LLM-as-judge evaluation</b></u> :
`evaluation.py` uses a second LLM call to compare a generated SQL query against an expected query and return a structured verdict, so accuracy can be tracked as prompts/models change instead of relying on manual spot-checks.

<u><b>Database layer</b></u> :
`database_utils.py` handles connecting to PostgreSQL, executing queries, and spinning up test/template databases from `.sql` dump files. A Docker Compose setup (`scripts/build_postgres_container`) lets anyone stand up a local Postgres instance with a demo dataset in one command.

<u><b>Streamlit UI</b></u> :
`ui.py` gives a non-technical user a simple front-end - type a question, select a database, and see the generated SQL query and response time immediately.

Please refer to the GitHub link to know more about the project

[Github](https://github.com/abinavrameshs/conversational-txt2sql)

{:.list-inline}
- Category: Gen AI, LLMs, Natural Language to SQL, Evaluation
- Tools: Python, OpenAI API, Streamlit, PostgreSQL, Docker, uv
