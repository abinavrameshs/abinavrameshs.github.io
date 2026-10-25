---
title: "Legalisation of Marijuana in Canada"
slug: cannabis-legalisation-sentiment
order: 10
featured: false
category: "NLP"
summary: "Province-by-province Twitter sentiment before and after cannabis legalisation, weighted by follower reach, to recommend how to roll out controversial policies."
image: assets/img/portfolio/cannabis-sentiment.svg
alt: "Analysis of Marijuana Legalisation in Canada"
tags: ["Python", "twitterscraper", "Selenium", "BeautifulSoup", "NLTK", "VADER"]
github: https://github.com/abinavrameshs/Analysis-of-Marijuana-Legalisation-in-Canada
---

## Objective

Canada legalised recreational cannabis on **17 October 2018**, a federal decision carried out province by province. This project asks: **how should a country with many provinces roll out a controversial policy?** It answers by measuring how public sentiment changed in each province before and after legalisation, and why.

## Data

- **Tweets, collected per province.** The `twitterscraper` tool was used with keyword queries combining legalisation, cannabis terms and the province name, for example `legalization AND weed AND quebec`. This covered 7 provinces: Quebec, Ontario, Alberta, British Columbia, Manitoba, Nova Scotia and Saskatchewan.
- **Follower counts.** A Selenium and BeautifulSoup scraper collected each tweeting user's follower count, to measure how influential they were.

## Method

1. **Pre-process** the tweets: lowercase, tokenise, remove stop words and lemmatise.
2. **Explore** the most frequent hashtags and words in each province, with and without hashtags, to see what people actually discussed.
3. **Score sentiment** for every tweet with **VADER**. A compound score above 0.1 counts as positive and below 0 as negative.
4. **Compare three periods** for each province: before the announcement, between announcement and legalisation, and after legalisation.
5. **Weight by influence.** Each tweet's sentiment was multiplied by the **log of the author's follower count**, so influential accounts count more. The log tames the huge spread in follower numbers.

## Findings

- **Before the announcement,** sentiment was broadly neutral everywhere.
- **After the announcement,** most provinces turned positive, seeing legalisation as a way to boost the economy, control use and shrink the black market. **Manitoba and Nova Scotia** were the exceptions, and they were the first provinces to publish **fines** for breaking cannabis rules (up to $2,500 in Manitoba, and $25 to $10,000 in Nova Scotia depending on the offence).
- **After legalisation,** sentiment fell in every province, driven largely by **supply shortages and prices**. Quebec ran out of legal stock within hours, and its legal price rose about 17% to $8.02/g, against roughly $6.50/g on the black market. Other complaints were a shortage of stores in Saskatchewan's big cities and slow retail licensing in British Columbia.
- **Influence-weighted sentiment followed the same pattern,** suggesting public opinion was shaped by influential accounts whose posts reached the most people.

## Recommendations

- **Pilot first.** Test a sensitive policy in one province before rolling it out nationally, so problems such as supply and pricing can be fixed before they sour sentiment everywhere.
- **Treat social media as a listening channel.** People use it to learn about and debate policy, so it's one of the fastest ways to gauge reaction.
- **Engage influential voices early.** Their sentiment is a leading indicator of the wider population's.

## Limitations

- Only English tweets were collected, which misses much of the conversation in Quebec.
- Tweet volumes differed a lot between provinces.
- Follower counts reflect the time of scraping, not the time of each tweet.
