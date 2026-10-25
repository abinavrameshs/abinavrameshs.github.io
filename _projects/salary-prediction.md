---
title: "Salary Prediction from Job Descriptions"
slug: salary-prediction
order: 13
featured: false
category: "NLP"
summary: "Compared Naive Bayes models on job-posting text, job attributes and both combined to predict high versus low salary. The text-only model won with 77.2% accuracy."
image: assets/img/portfolio/salary-prediction.svg
alt: "Salary Prediction from Job Descriptions"
tags: ["Python", "NLTK", "scikit-learn", "TF-IDF", "Naive Bayes"]
github: https://github.com/abinavrameshs/NLP-Salary-Prediction
---

## Objective

How much does the **wording of a job posting** reveal about its pay? This project tests the predictive power of text against structured job data, using the Kaggle [Job Salary Prediction](http://www.kaggle.com/c/job-salary-prediction) dataset of UK job ads (training file `train_rev1`).

Salaries were turned into two classes: **high** (75th percentile and above) and **low** (below the 75th percentile).

## Data preparation

- Rows with missing values were removed and **2,500 postings** were randomly sampled.
- Text was cleaned: punctuation removed, lowercased and lemmatised.
- Missing contract fields were filled with sensible defaults: if not part-time, then full-time; if not contract, then permanent.
- A flag was added for postings in **high cost-of-living locations** such as London, Oxford, Cambridge, Bristol, Reading, Edinburgh and Leeds.

## Exploring the text

- **Nouns and adjectives** dominate job descriptions: positions are described by *what* the role is and *what it's like*.
- Word frequencies closely follow **Zipf's law**: a few words are very common and most are rare.
- The most common words after cleaning were *experience, role, team, client, business, work, working, skill, service* and *within*. Recruiters mostly ask for experienced, team-oriented, client-facing people.

## Models

All three are Naive Bayes classifiers:

| Model | Predictors | Accuracy | Precision (high) | Recall (high) |
| --- | --- | --- | --- | --- |
| Numeric only | Contract type and time, category, high-cost location | 75.6% | 70.0% | 10.8% |
| **Text only** | **TF-IDF of the job description** | **77.2%** | 59.3% | 39.2% |
| Hybrid | Text and numeric predictors | 76.6% | 57.5% | 38.5% |

## Findings

- **Text alone performed best.** The words in a posting predict pay better than its structured attributes. The numeric model barely beat always guessing "low", catching only about 1 in 10 high-salary jobs.
- **Adding the numeric features didn't help.** The hybrid model scored slightly lower than text alone, as the extra, weaker features added noise.
- **High- and low-salary postings use different vocabulary:**

| Rank | High salary | Low salary |
| --- | --- | --- |
| 1 | business | school |
| 2 | project | experience |
| 3 | experience | role |
| 4 | manager | service |
| 5 | team | sale |

High-paying ads lean towards management, projects and finance. Lower-paying ads lean towards schools, sales and service roles.
