---
title: "DocTalk: Multi-Modal Chat App"
slug: doctalk
order: 3
featured: true
category: "Multi-Modal LLMs"
summary: "One chat for PDFs, code, images and audio, with Gemini reasoning over the raw file instead of a chain of OCR and transcription steps."
image: assets/img/portfolio/doctalk.svg
alt: "DocTalk: Multi-Modal Chat App"
tags: ["Python", "Streamlit", "Gemini 2.0 Flash", "google-genai SDK", "Pillow", "PDM"]
github: https://github.com/abinavrameshs/Multi-Modal-Chat-App
---

## Overview

Asking questions about different kinds of content usually means different tools: a PDF reader for documents, OCR for scans, a transcription service for audio, then a text-only LLM on top. DocTalk replaces that chain with **one chat box**. Upload a file of almost any type and ask about it directly.

It works because **Gemini 2.0 Flash is natively multi-modal**. The app sends the raw file bytes to the model, which reasons over text, pixels or audio itself. Nothing is converted to text first, so nothing is lost in OCR or transcription.

## What you can upload

| Type | Formats |
| --- | --- |
| Documents | PDF, TXT, Markdown, CSV, XML, RTF, HTML, CSS |
| Code | Python, JavaScript |
| Images | PNG, JPEG, WEBP, HEIC, HEIF |
| Audio | WAV, MP3, AIFF, AAC, OGG Vorbis, FLAC |

Example questions:
- *"What are the key risks called out on page 3 of this PDF?"*
- *"Describe what's happening in this photo."*
- *"Summarise this meeting recording and list the action items."*
- *"Explain what this Python file does."*

## How it works

1. **Choose a mode.** Chat with plain text, or upload a file.
2. **Save the upload.** The file is written to a working folder, which is cleared before each new upload so old files never leak into a new conversation.
3. **Detect the file type.** Python's `mimetypes` works out the MIME type, and anything outside the supported list is rejected with a clear message.
4. **Wrap the bytes.** The file is wrapped as a `Part` with its MIME type, the format the Gemini SDK expects for inline files.
5. **Preview images.** Images are also opened with Pillow and shown as a thumbnail, so you can see what you're asking about.
6. **Ask.** Your question and the file go to Gemini in a single request. The answer appears with the response time, so you get a feel for how speed varies with file type and size.

## Why this approach

- **Fewer moving parts.** There's one model call instead of an OCR, speech-to-text and LLM chain, so there's less to break and less to keep in sync.
- **Better answers on mixed content.** The model sees charts, layout and tone of voice that would be lost in a text-only conversion.
- **Easy to extend.** Supporting a new format is mostly a matter of adding its MIME type.

## Running it

```bash
pdm install
echo "GOOGLE_API_KEY=<your key>" > .env
pdm run streamlit run app.py
```
