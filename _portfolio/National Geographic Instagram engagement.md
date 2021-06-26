---
title: Increasing engagement on National Geographic’s Instagram
subtitle: Text Mining, Web Scraping, LDA topic modelling 
image: assets/img/portfolio/NG.jpg
alt: Keep Exploring

caption:
  title: Increasing engagement on National Geographic’s Instagram
  subtitle: Text Mining, Web Scraping, LDA topic modelling 
  thumbnail: assets/img/portfolio/NG.jpg
---

## Objective

This project is aimed at increasing engagement on National Geographic’s Instagram page (Instagram: natgeo). The final outcome is to advise Natgeo regarding the type of content they should post more and less of – i.e., what types of images increase engagement? What types decrease engagement?

## Methodology

<u>*1*</u>.	Scrape 500-1000 images from the natgeo Instagram page using scrapers available online. Along with the images, scrape captions, the number of likes and the number of comments for each post.
<u>*2*</u>.	Image labels for 1500 pictures were collected using Google Cloud vision API.
<u>*3*</u>.	Create a metric (score) for engagement by using a weighted sum of #_likes and #_comments. Be sure to normalize #_likes and #_comments. Now create an `engagement score = .4*#_likes (normalized) + .6*#_comments (normalized)`.
<u>*4*</u>.	Build 3 different models to predict engagement with
a. Image labels (text) as predictors.
b. using captions to predict the same?
c. Using both image labels and Captions as predictors
<u>*5*</u>.	Perform topic modeling (LDA) on the original image labels and check engagement score per topic
<u>*6*</u>.	Recommendations to NatGeo


Please refer to the code and document attached in the repository for more details
[Github](https://github.com/abinavrameshs/Social-Network-Analysis-to-increase-engagement)

{:.list-inline}
- Category: NLP, Metric analysis
- Tools: Python

