---
order: 6
caption: #what displays in the portfolio grid:
  title: Nutritionist LLM
  subtitle: Gen AI, Multi-Modal LLM, Health Tech
  thumbnail: assets/img/portfolio/nutritionist-llm.jpg

#what displays when the item is clicked:
title: Nutritionist LLM
subtitle: Gen AI, Multi-Modal LLM, Health Tech
image: assets/img/portfolio/nutritionist-llm.jpg #main image, can be a link or a file in assets/img/portfolio
alt: Nutritionist LLM

---

## Objective

Snap a photo of a meal and get back a nutritionist-style breakdown - what's on the plate, its nutritional content, and how healthy it actually is, powered entirely by a multi-modal LLM reading the image directly (no manual food logging).

## Features

<u><b>Food item identification</b></u> :
Detects and lists the individual food items present in the uploaded image.

<u><b>Nutritional breakdown</b></u> :
Reports calories, fat, carbohydrates, protein and other key nutrients per food item.

<u><b>Total meal analysis</b></u> :
Aggregates the per-item numbers into total calories and a macronutrient breakdown for the whole plate.

<u><b>Health rating</b></u> :
Assigns a 1-10 health score based on nutrient balance, calorie density, and presence of essential vitamins and minerals.

<u><b>Actionable recommendations</b></u> :
Suggests specific swaps or additions to improve the meal's nutritional quality and score.

## Implementation

Built as a Streamlit app (`app.py`) that sends the uploaded meal photo straight to Google's GenAI vision model, which handles food recognition and nutritional reasoning in a single pass rather than chaining separate classification and lookup steps.

Please refer to the GitHub link to know more about the project

[Github](https://github.com/abinavrameshs/Nutritionist-LLM)

{:.list-inline}
- Category: Gen AI, Multi-Modal LLM, Health Tech
- Tools: Python, Google GenAI (Vision), Streamlit, PDM
