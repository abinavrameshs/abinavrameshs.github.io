---
title: "Car Brand Analysis"
slug: car-brand-analysis
order: 7
featured: false
category: "Text Mining"
summary: "Scraped Edmunds forum posts and used lift ratios and an MDS map to show which car brands buyers see as similar, and what they associate with each."
image: assets/img/portfolio/car-brands.svg
alt: "Car Brand Analysis"
tags: ["Python", "Selenium", "BeautifulSoup", "NLTK", "scikit-learn", "MDS"]
github: https://github.com/abinavrameshs/Web-Scraping-and-Car-Brand-Analysis
---

## Objective

Find out how car buyers *actually* talk about brands: which brands they see as alternatives to each other, which attributes they link to each brand, and which brand they aspire to. Then turn that into advice for brand, product and marketing managers.

## Data

A Selenium crawler with BeautifulSoup collected messages from the Edmunds.com **"Midsize Sedans 2.0"** discussion forum, where owners and shoppers compare everyday family sedans.

## Method

1. **Clean the text.** Tokenise each comment, lowercase it, and drop stop words and non-alphabetic tokens.
2. **Map models to brands.** A lookup file replaces model names with their brand (for example *Camry* becomes *Toyota*), so all mentions count towards the brand.
3. **Count co-mentions.** Keep each brand once per comment, then count how often each pair of brands appears in the same comment.
4. **Compute lift.** Lift measures how much more often two brands appear together than chance would predict. A lift above 1 means people tend to discuss them together.
5. **Draw an MDS map.** Using **1 / lift** as the distance between brands, multidimensional scaling places brands on a 2-D map where closeness means similarity in buyers' minds.
6. **Link brands to attributes.** Words were grouped into attribute categories (aesthetics, equipment, performance, safety, quality, cost, environment), and lift was computed between brands and attributes.

## Findings

**Most-discussed brands:** Honda (2,203 mentions), Ford (1,462), Toyota (1,020), Nissan (761) and Hyundai (716). Half of the top 10 were Japanese or Korean and half American, typical of a middle-class family car discussion.

**How buyers group brands:**
- Japanese brands sat together on one side of the map and American brands on the other, with Hyundai the exception.
- Dodge and Chrysler were closely linked. Mazda sat far from every other brand.
- **Ford and Toyota**, the best-selling American and Japanese brands in the US, bridged the two groups. Ford's lift of **1.50** with Toyota was its highest with any Japanese brand.

**What buyers talk about:** equipment (2,941 mentions), aesthetics (2,590) and performance (2,346) dominated, well ahead of cost (862) and quality (728).

**Brand–attribute associations:**
- **Hyundai** was most strongly linked with quality (lift 1.56) and aesthetics (1.26).
- **Ford** was linked with cost (1.24) and performance (1.18).
- **Nissan** was linked with equipment.

**Most aspirational brand:** using a list of 86 "aspirational" words (excellent, top, reliable and so on), **Audi** had the highest lift (2.66), ahead of Mercedes (2.01) and Volkswagen (1.95). Three of the top five were luxury brands, even though the forum was about mainstream family cars.

## Recommendations

- **Hyundai marketing:** lead with quality and aesthetics, which buyers already credit them with and which their warranty programme backs up.
- **Hyundai product:** equipment and performance had Hyundai's lowest lift, and equipment was the lowest of any brand. With Honda, Nissan and Toyota as close substitutes on cost, that's where to invest.
- **Audi:** a positive reputation among mainstream shoppers suggests an opening to target middle-income families.
- **Ford and Toyota:** dig into what is compared when the two are mentioned together, to find strengths to borrow and weaknesses to fix.

## Limitations

Audi had relatively few mentions, so its aspirational score rests on a small sample. A comment that mentions several brands can't tell us which brand an attribute word refers to.
