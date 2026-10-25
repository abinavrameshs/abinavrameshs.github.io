---
title: "Increasing Engagement on National Geographic's Instagram"
slug: natgeo-instagram-engagement
order: 11
featured: false
category: "NLP"
summary: "Predicted Instagram engagement from Google Vision image labels and captions (77% accuracy), then used LDA topics to show that wildlife posts drive the most engagement."
image: assets/img/portfolio/natgeo-engagement.svg
alt: "Increasing Engagement on National Geographic's Instagram"
tags: ["Python", "Instaloader", "Google Cloud Vision", "scikit-learn", "LDA"]
github: https://github.com/abinavrameshs/Social-Network-Analysis-to-increase-engagement
---

## Business question

National Geographic (`@natgeo`) posts striking photography to one of Instagram's largest audiences. **Which kinds of images drive engagement, and which don't?** The goal was to give NatGeo concrete advice on what to post more and less of.

## Data

- **Posts.** The `instaloader` package collected NatGeo posts with their **captions, like counts and comment counts**.
- **Image labels.** Each image was sent to the **Google Cloud Vision API**, which returned descriptive labels such as *wildlife*, *mammal*, *sky* or *monochrome*. That gave about **1,500 labelled images**.

## Measuring engagement

Likes and comments were each normalised by their maximum, then combined into one score:

**engagement = 0.4 × likes (normalised) + 0.6 × comments (normalised)**

Comments get the higher weight because writing one takes more effort than tapping like. Posts were then split at the median into **high** and **low** engagement.

## Predicting engagement

Three logistic regression models were trained on text features (bag-of-words and TF-IDF), each using different inputs:

| Predictors | Accuracy |
| --- | --- |
| Image labels only | 74.8% |
| Captions only | 74.2% |
| **Image labels + captions** | **76.6%** |

What's *in* the picture predicted engagement slightly better than what the caption said, and **combining both worked best**.

## What the images are about: LDA topics

Topic modelling (LDA) on the image labels found four clear themes:

| Topic | Top labels |
| --- | --- |
| Wildlife | wildlife, animal, mammal, terrestrial, vertebrate |
| Aerial landscape | sky, landscape, natural phenomenon, mountain, tree |
| Water | water, sky, sea, architecture, turtle |
| People | photography, monochrome, black, people |

Posts were grouped by engagement (bottom 25%, middle 50%, top 25%) and the average weight of each topic was compared across groups:

- **Wildlife** had the highest weight among the **most engaging** posts.
- **People**, especially monochrome portraits, had the highest weight among the **least engaging** posts.

## Recommendations to NatGeo

- **Post more wildlife,** especially images featuring animals, which reliably drive the highest engagement.
- **Post fewer monochrome people photos,** which sit at the bottom of the engagement range.
- **Write captions that support the image.** Captions add predictive signal beyond the picture alone, so they shape engagement too.
