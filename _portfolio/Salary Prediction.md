---
caption: #what displays in the portfolio grid:
  title: Salary Prediction from job descriptions
  subtitle: Text Classification
  thumbnail: assets/img/portfolio/salary_prediction.jpg
  
#what displays when the item is clicked:
title: Salary Prediction from job descriptions
subtitle: Text Classification
image: assets/img/portfolio/salary_prediction.jpg #main image, can be a link or a file in assets/img/portfolio
alt: Text Classification

---

## Objective 

The objective is to develop a classification model to predict salary from job description.The idea here is to test the predictive power of text and compare it with that of numeric data

## Data Description

Please use the following link to download the data : [Job descriptions data set](http://www.kaggle.com/c/job-salary-prediction). Please use training dataset `train_rev1`


## Methodology

Salary information was bucketized based on percentiles (high (75th percentile and above) or low (below 75th percentile) salary from the text contained in the job descriptions). The job descriptions were vectorized using TF-IDF.

There are 3 classification models that were built for predicting the range of salaries : 
<u>1</u>. Using only Text predictors : Two kinds of Naive Bayes models were built for this purpose , Bernoulli Classifier and Multinomial Text Classifier

<u>2</u>. Only using numerical predictors

<u>3</u>. Hybrid model (using both numerical and text predictors)

The above models were then compared using accuracy score.

Please refer to the github link to know more about the project

[Github](https://github.com/abinavrameshs/NLP-Salary-Prediction)


{:.list-inline} 
- Category: Text Classification
- Tools: Python NLTK

