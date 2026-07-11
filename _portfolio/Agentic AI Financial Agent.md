---
order: 2
caption: #what displays in the portfolio grid:
  title: Agentic AI Financial Agent
  subtitle: Agentic AI, Gen AI, Finance
  thumbnail: assets/img/portfolio/financial-agent.svg

#what displays when the item is clicked:
title: Agentic AI Financial Agent
subtitle: Agentic AI, Gen AI, Finance
image: assets/img/portfolio/financial-agent.svg #main image, can be a link or a file in assets/img/portfolio
alt: Agentic AI Financial Agent

---

## Objective

A multi-agent system that researches a stock or topic the way an analyst would: pull financials, search the web, scrape sources, and summarize video content - then hand back a structured, sourced answer instead of a single flat LLM response.

## Agents

Built on the [agno](https://docs.agno.com/introduction) agent framework, the project defines a set of specialist agents that can be run individually or combined:

<u><b>Financial agent</b></u> :
Fetches stock prices, analyst recommendations, stock fundamentals, and company news using YFinance.

<u><b>Web search agent</b></u> :
Searches the web via DuckDuckGo and always includes sources alongside its answers, so claims are traceable.

<u><b>Web scraping agent</b></u> :
Crawls websites and extracts structured content using Crawl4AI; a second variant integrates with a self-hosted Searxng instance for privacy-respecting search plus scraping.

<u><b>YouTube summarizing agent</b></u> :
Gathers captions and metadata from a video and produces a summary, useful for pulling insights out of earnings calls or market-commentary videos.

<u><b>Multi-agent orchestration</b></u> :
The financial and web-search agents are combined into a single multi-agent team so one query can pull live market data and current news in the same response.

<u><b>Interactive playground</b></u> :
`playground.py` spins up a Uvicorn-served web interface for experimenting with all the agents interactively, rather than only via the command line.

Please refer to the GitHub link to know more about the project

[Github](https://github.com/abinavrameshs/Agentic-AI-Financial-Agent)

{:.list-inline}
- Category: Agentic AI, Gen AI, Financial Research
- Tools: Python, agno, YFinance, DuckDuckGo, Crawl4AI, Searxng, Groq, OpenAI, PDM
