---
title: "Nutritionist LLM"
slug: nutritionist-llm
order: 6
featured: true
category: "Multi-Modal LLMs"
summary: "Upload photos of everything you ate in a day and get the food items, calories, macros, a 1-10 health score and suggested swaps from a vision model."
image: assets/img/portfolio/nutritionist-llm.svg
alt: "Nutritionist LLM"
tags: ["Python", "Gemini 2.0 Flash", "google-genai SDK", "Streamlit", "Pillow", "PDM"]
github: https://github.com/abinavrameshs/Nutritionist-LLM
---

## Overview

Food-logging apps fail because logging is tedious: searching for each item, guessing portion sizes, typing it all in. **Nutritionist's Corner** skips that. Upload photos of your meals and a multi-modal LLM acts as a nutritionist, identifying what's on the plate and assessing how healthy it is.

You can upload **several photos at once**, for example breakfast, lunch, a snack and dinner. The app combines them into **one report for the whole day**, rather than one report per photo.

## What the report includes

1. **Food items:** every item identified across all the photos.
2. **Nutrition per item:** calories, fat (total, saturated and unsaturated), energy, carbohydrates, protein, and other key components such as fibre, sugar and sodium.
3. **Totals:** total calories and the macronutrient split for everything eaten.
4. **Health rating:** a score from 1 to 10 based on nutrient balance, calorie density and essential vitamins and minerals, with an explanation of the score.
5. **Recommendations:** specific swaps or additions to improve the meals, plus an estimate of the **revised health score** if you follow them.

## How it works

- **One model call.** The uploaded images are sent to **Gemini 2.0 Flash** together with a detailed nutritionist prompt. Food recognition, nutrition estimates and advice all happen in that single call, instead of chaining an image classifier, a nutrition database lookup and a separate text model.
- **The prompt does the structuring.** It lists the exact sections the report must contain and the criteria the model should be judged on: identification accuracy, precise calculations, useful recommendations and clarity. It also tells the model to consider *all* images and produce *one* combined report.
- **Simple upload handling.** JPG and PNG images are saved to a working folder that is cleared on each run, shown back as thumbnails, and read as `Part` objects with their MIME type for the API.
- **Timing.** Each analysis shows how long it took.

## Limitations

The figures are **estimates from a photo**. Portion sizes, hidden ingredients such as oil or sugar, and cooking methods are hard to judge visually. Treat the output as a quick, informed guide, not as medical or dietary advice.

## Running it

```bash
pdm install
echo "GOOGLE_API_KEY=<your key>" > .env
pdm run streamlit run app.py
```
