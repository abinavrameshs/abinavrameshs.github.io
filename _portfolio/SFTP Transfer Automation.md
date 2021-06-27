---
caption: #what displays in the portfolio grid:
  title: SFTP Transfer automation
  subtitle: Python automation
  thumbnail: assets/img/portfolio/automation_sftp_python.jpg
  
#what displays when the item is clicked:
title: SFTP Transfer automation
subtitle: Python automation
image: assets/img/portfolio/automation_sftp_python.jpg #main image, can be a link or a file in assets/img/portfolio
alt: SFTP Transfer automation

---


## Objective

This project is an initiative to automatically transfer files onto an SFTP server using python script and to schedule the script to run at a specific time during the day using windows scheduler.


## Methodology

The following analyses were performed in this project : 

Development of python code to perform the following :
<u>1</u>.Connect to impala to fetch data and convert into CSV file

<u>2</u>.Connect to SFTP server, check the directory structure, and place the CSV file into the required directory

<u>3</u>.Creation of .bat file to enable running of the python code on shell

<u>4</u>.Scheduling the .bat file using windows scheduler. Use the below link to schedule a .bat file using windows task scheduler : Scheduling a .bat file [Scheduling a .bat file](https://windowsreport.com/schedule-batch-file-windows/) 

Please refer to the github link to know more about the project

[Github](https://github.com/abinavrameshs/SFTP-transfer-automation)



{:.list-inline} 
- Category: Python automation
- Tools: pysftp, requests

