---
title: "Agentic AI Financial Agent"
slug: agentic-ai-financial-agent
order: 2
featured: true
category: "Agentic AI"
summary: "A team of specialist agents that pull live market data, search and scrape the web, and summarise videos into one sourced answer."
image: assets/img/portfolio/financial-agent.svg
alt: "Agentic AI Financial Agent"
tags: ["Python", "agno", "Groq", "Llama 3.3 70B", "Gemini", "YFinance", "DuckDuckGo", "Crawl4AI", "SearXNG", "PDM"]
github: https://github.com/abinavrameshs/Agentic-AI-Financial-Agent
---

## Overview

A plain LLM can't tell you NVIDIA's analyst consensus or this morning's company news. Its knowledge stops at its training cutoff, and it tends to make up numbers when asked. This project builds **agents with tools** instead. Each agent can fetch live data, cite where it came from, and hand back a structured answer.

It's built on the [agno](https://docs.agno.com/introduction) agent framework (formerly Phidata), mostly using **Llama 3.3 70B served by Groq** for fast responses, with Google Gemini for the scraping agent.

## The agents

### Finance agent

Uses YFinance tools to fetch **stock prices, analyst recommendations, company fundamentals and company news**. It is told to present the data as tables, so figures are easy to compare.

### Web search agent

Searches the web through DuckDuckGo and is told to **always include sources**, so every claim can be traced back to where it came from.

### Multi-agent team

The finance and web search agents are combined into **one team with a coordinating agent**. Given a request such as:

> *"Summarise analyst recommendations and share the latest news for NVIDIA"*

the coordinator first looks up the company's ticker symbol, then sends the market-data part to the finance agent and the news part to the search agent. It merges both into one sourced answer with tables.

### Web scraping agent

Uses Crawl4AI to crawl a given URL and extract as much information as it can, so users can ask questions about the page. It runs on Gemini.

### Private search agent (SearXNG)

A variant that searches through a **self-hosted SearXNG** metasearch instance instead of a public search API, with news and science sources enabled. Searching and summarising works well. Crawling pages through this agent was still experimental.

### YouTube agent

Gathers a video's captions and metadata to summarise it or answer questions about it. It's intended for pulling key points out of earnings calls or market commentary videos. This agent was also experimental.

## Interactive playground

`playground.py` serves the finance and search agents in agno's **Playground**, a chat-style web interface run with Uvicorn. You can talk to each agent, see which tools it calls, and compare answers without touching the command line.

## Running it

```bash
pdm install
# .env: GROQ_API_KEY, plus GOOGLE_API_KEY or OPENAI_API_KEY if you use those models
python playground.py        # web playground
python financial_agent.py   # multi-agent NVIDIA example in the terminal
```

