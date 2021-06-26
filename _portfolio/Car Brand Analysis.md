---
caption: #what displays in the portfolio grid:
  title: Car Brand Analysis
  subtitle: Web Scraping, Data mining, Text Analysis
  thumbnail: assets/img/portfolio/car-brands.jpg
  
#what displays when the item is clicked:
title: Car Brand Analysis
subtitle: Web Scraping, Data mining, Text Analysis
image: assets/img/portfolio/car-brands.jpg #main image, can be a link or a file in assets/img/portfolio
alt: Car Brand Analysis

---

## Objective

To gather comments on forums to find out which brands of cars are similar to each other in terms of attributes such as equipment, aesthetics, performance, cost and quality and to provide recommendations based on the analysis.

## Methodology

This project consists of several parts :

<u><b>Web scraping</b></u> : 
A Web crawler/scraper was developed using Selenium to fetch messages posted in Edmunds.com discussion forums URL that was scraped :[edmunds.com](https://forums.edmunds.com/discussion/7526/general/x/midsize-sedans-2-0) 
The code for web scraping is included as one of the code snippets in the repository.

<u><b>Plotting MDS map</b></u> : 
The association among different car brands were calculated `using a metric called Lift` and an MDS plot was generated using libraries in python. For more details please view the code snippet attached in the Github repository.
For more details on MDS plots, please visit the [MDS Wiki](https://en.wikipedia.org/wiki/Multidimensional_scaling)
For more information on Lift please visit [Details about Lift](https://en.wikipedia.org/wiki/Lift_(data_mining))

</u><b>Recommendations</b></u> : 
On analysing different correlations among brands, several recommendations were provided to the top management. Please view the document attached in the Github project for more details.

Please refer to the github link to know more about the project

[Github](https://github.com/abinavrameshs/Web-Scraping-and-Car-Brand-Analysis)



{:.list-inline} 
- Category: Web Scraping, Data mining, Text Analysis, Lift ratios, MDS Plots, Presentation
- Tools: Python packages like BeautifulSoup,selenium,sklearn, nltk

