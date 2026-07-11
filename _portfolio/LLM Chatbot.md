---
order: 5
caption: #what displays in the portfolio grid:
  title: LLM Chatbot
  subtitle: Gen AI, LLMs, Conversational AI
  thumbnail: assets/img/portfolio/llm-chatbot.jpg

#what displays when the item is clicked:
title: LLM Chatbot
subtitle: Gen AI, LLMs, Conversational AI
image: assets/img/portfolio/llm-chatbot.jpg #main image, can be a link or a file in assets/img/portfolio
alt: LLM Chatbot

---

## Objective

A clean, from-scratch conversational chatbot built on top of Google's `gemini-2.0-flash` model - built to understand how to wire up a multi-turn LLM chat experience (including conversation memory) without leaning on a heavier framework.

## Implementation

<u><b>Conversation memory</b></u> :
The Streamlit app (`app.py`) maintains chat history across turns, so the model has context from earlier in the conversation rather than treating every message as a fresh prompt.

<u><b>Model-agnostic design</b></u> :
Built primarily around `gemini-2.0-flash` via the `google-genai` SDK, but structured so any other LLM API could be swapped in with minimal changes.

<u><b>Simple, dependency-light stack</b></u> :
Just three core dependencies - Streamlit for the front-end, `google-genai` for the model calls, and `python-dotenv` for API key management - keeping the project easy to read end-to-end.

Please refer to the GitHub link to know more about the project

[Github](https://github.com/abinavrameshs/LLM-Chatbot)

{:.list-inline}
- Category: Gen AI, LLMs, Conversational AI
- Tools: Python, Google Gemini API, Streamlit, PDM
