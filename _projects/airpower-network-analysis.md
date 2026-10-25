---
title: "Network Analysis of the AirPower Cancellation"
slug: airpower-network-analysis
order: 14
featured: false
category: "Social Network Analysis"
summary: "Analysed about 30,000 tweets as Apple cancelled AirPower: sentiment, emoji use, how the network exploded, and which influencers spread it worldwide."
image: assets/img/portfolio/airpower-network.svg
alt: "Network Analysis of the AirPower Cancellation"
tags: ["R", "rtweet", "Python", "networkx", "Gephi", "VADER"]
github: https://github.com/abinavrameshs/Social-Network-Analysis-Cancellation-of-Airpower
---

## Background

Apple announced **AirPower**, a mat that could charge several Apple devices at once regardless of where they were placed, in **September 2017**. It was quietly removed from Apple's website a year later amid reports of overheating and other technical problems. On **29 March 2019**, Apple cancelled it, the company's first-ever cancellation of an announced hardware product.

**The question:** how did the public react on social media, who drove the conversation, and how well did Apple handle the crisis?

## Data

Tweets were collected with the Twitter API (`rtweet` in R) using keyword pairs such as *AirPower + Apple* and *AirPower + AirPods*:

| Period | Tweets |
| --- | --- |
| Before the cancellation (25-29 March 2019) | 2,984 |
| After the cancellation (29 March - 4 April 2019) | 26,513 |

## Text analysis

- **Word clouds** before the cancellation showed excitement and anticipation about a release date. Afterwards, frustration took over.
- **Emoji analysis** with the `emoji` package told the same story, shifting from excited to negative.
- **VADER sentiment** was scored per tweet, then rolled up to each user and each location.

## Network analysis

The retweet and mention network **exploded** on the day of the announcement:

| Date | Nodes | Edges | Node growth |
| --- | --- | --- | --- |
| Before 29 March | 1,969 | 2,175 | — |
| 29 March | 9,441 | 12,272 | +379% |
| 30 March | 13,519 | 17,838 | +43% |
| 3 April | 15,854 | 21,056 | +1% |

**Finding top influencers.** Each user got an **influence score**: an equal-weighted mix of five measures, each normalised to a 0-1 scale:

- out-degree
- follower count
- listed count
- closeness centrality
- betweenness centrality

**Questions answered:**

- **Were influencers positive or negative?** In most locations, **negative influencers outnumbered positive ones**.
- **Where were they?** They were concentrated in tech hubs, especially the **US, India and London**.
- **Who connected different communities?** Users with the highest betweenness centrality bridged otherwise separate groups.
- **Local or global?** Global. Top influencers reached almost **1,700 locations worldwide**.

## Recommendations to Apple

- **Use the official Twitter account proactively.** Address issues directly instead of letting rumours spread from user to user.
- **Work with influencers.** They can amplify negative sentiment or misinformation, so monitor them and consider collaborations, sponsorships or early product testing.
- **Fix internal communication.** Better transparency between technical and management teams could prevent a two-year promise that couldn't be delivered.
- **Forecast risk realistically.** Building anticipation for two years only works if the product is achievable.

## Limitations

- Only 10 days of data (about 30,000 tweets).
- No demographic attributes such as age or gender were available from the API.
- Location fields were messy.
- With more history, users who are always negative about Apple could be separated from those reacting to this event.
