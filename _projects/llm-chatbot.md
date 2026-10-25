---
title: "LLM Chatbot"
slug: llm-chatbot
order: 5
featured: true
category: "LLM Applications"
summary: "A from-scratch multi-turn chatbot on Gemini 2.0 Flash with conversation memory and a model layer that can be swapped out."
image: assets/img/portfolio/llm-chatbot.svg
alt: "LLM Chatbot"
tags: ["Python", "Gemini 2.0 Flash", "google-genai SDK", "Streamlit", "PDM"]
github: https://github.com/abinavrameshs/LLM-Chatbot
---

## Overview

A small, readable chatbot built directly on Google's `google-genai` SDK, with no LangChain or other framework. The aim was to understand what a "chat" with an LLM actually is under the hood. In particular: how a model that is stateless between requests can remember what you said three messages ago.

## The key idea: conversation memory

An LLM API call has no memory of its own. To make a conversation feel continuous, the app has to resend the earlier turns with every new message. This project does that explicitly:

1. **Store the history.** Streamlit's `session_state` holds a `chat_history` list that survives page reruns.
2. **Open a chat with it.** On every interaction, a Gemini chat session is created **seeded with that history**, using the SDK's own `Content` objects with `user` and `model` roles.
3. **Record each exchange.** When you ask a question, the answer comes back and **both** your message and the reply are appended to the history.
4. **Show the transcript.** The full conversation is displayed below the latest answer.

So when you ask *"What did I ask you earlier?"*, the model can answer, because it has been given the whole conversation every time.

## Design choices

- **Model-agnostic.** The model is a single constant (`gemini-2.0-flash`), so switching to another Gemini model is a one-line change, and the history-handling pattern carries over to other chat APIs.
- **Minimal dependencies.** Only three: `streamlit` for the UI, `google-genai` for the model and `python-dotenv` for the API key. The whole app is easy to read end to end.

## Running it

```bash
pdm install
echo "GOOGLE_API_KEY=<your key>" > .env
pdm run streamlit run app.py
```

The repository includes a short demo GIF of a multi-turn conversation.
