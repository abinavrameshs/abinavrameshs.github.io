---
order: 3
caption: #what displays in the portfolio grid:
  title: "DocTalk: Multi-Modal Chat App"
  subtitle: Multi-Modal LLM, Gen AI, Streamlit
  thumbnail: assets/img/portfolio/doctalk.svg

#what displays when the item is clicked:
title: "DocTalk: Multi-Modal Chat App"
subtitle: Multi-Modal LLM, Gen AI, Streamlit
image: assets/img/portfolio/doctalk.svg #main image, can be a link or a file in assets/img/portfolio
alt: "DocTalk: Multi-Modal Chat App"

---

## Objective

A single chat interface that understands text, images, audio, and documents - so instead of switching tools for "summarize this PDF" vs "describe this image" vs "transcribe this audio," it's all one conversation, powered by Google's multi-modal Gemini models.

## What it handles

DocTalk accepts a genuinely broad range of file types directly in chat:

<u><b>Documents</b></u> : PDF, JavaScript, Python, TXT, HTML, CSS, Markdown, CSV, XML, RTF

<u><b>Images</b></u> : PNG, JPEG, WEBP, HEIC, HEIF

<u><b>Audio</b></u> : WAV, MP3, AIFF, AAC, OGG Vorbis, FLAC

## How it works

<u><b>Multi-modal reasoning</b></u> :
Rather than stitching together separate OCR, speech-to-text, and text-only LLM pipelines, DocTalk sends the uploaded file directly to a multi-modal LLM (Google's Gemini via the `google-generativeai` SDK) so the model reasons over the raw content itself - text, pixels, or waveform.

<u><b>File-type detection</b></u> :
Uses Python's `mimetypes` module together with Pillow for image handling to correctly route each upload to the right processing path before it reaches the model.

<u><b>Streamlit front-end</b></u> :
A lightweight chat UI (`app.py`) lets a user drop in a file and immediately start asking questions about it, with the conversation history preserved in-session.

Please refer to the GitHub link to know more about the project

[Github](https://github.com/abinavrameshs/Multi-Modal-Chat-App)

{:.list-inline}
- Category: Multi-Modal LLM, Gen AI, Document/Image/Audio Understanding
- Tools: Python, Streamlit, Google Gemini (GenAI SDK), Pillow, PDM
