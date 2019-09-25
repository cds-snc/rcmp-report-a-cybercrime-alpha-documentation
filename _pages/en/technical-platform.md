---
layout: page
title:  "Technical Platform"
lang: en
permalink: "/technical-platform/"
trans_url: "/platforme-technique/"
---

TODO
## What do you get
- Components
- Bilingual
- GraphQL API
- Containerized?
- Others?

## Stack/Architecture diagram


## What does the victim get because of these choices
- Trust factors (https?)
-We use RCMP domain name: https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca
-We use RCMP logo
-We use reassurance language

- Load Testing results?
Load testing is  to determine how the application behaves when multiple users access it simutaneously. We want to know if the application will perform well under their expected workload. We need to do two sides testing. One is front side, which test how long it takes users to fetch the web app from RCMP Azure. The other one is the API, we want to know how long it takes NC3 staffs to get the data back from the API. We use k6 load testing tool, Which is an open source.More details for the loading testing, please visit: https://docs.k6.io/docs
-For the front side testing,we set virtual user to 150 (which means 150 users try to fetch the web at the same time). Test Duration is 10 seconds. We can see the result: 
-Fetching the web app from RCMP Azure
-100 users / second
On average, users waited 149milliseconds before getting a response.If you are intested in the code, please visit: https://github.com/cds-snc/report-a-cybercrime/blob/master/frontend/utils/loadTesting.js
-For the API test.  we set  virtual user to the same number 150 (which means 150 users try to get the data back from the API). Test duration 10 seconds. We ask the API how many records are there in the database. We got the following results:
-asking the api how many records are in the database
-120 users / second
-On average, users waited 55  milliseconds before getting a response
code details can be found at https://github.com/cds-snc/report-a-cybercrime/blob/master/api/utils/loadTesting.js
-Is 100 users/s enough?
-According to CAFC’s recording ,they received more than 150,000 calls from around the world every year and receives approximately 1,200 e‑mails every day about suspected fraud[1]. 
-Testing workload:   100x60x60x24x365=3,090,528,000      (numbers/annual)
Report fraud number:   150,000+1200x365=        588,000  (numbers/annual)
3,090,528,000/588,000= 5,256 times
Since testing workload is 5,256 times more than currently actually report fraud number, this implies the application will behave well when multiple users access it simutaneously.

-What did we do to achieve an app that is this fast?
We use google cloud and Azure kubernetes, which two main factors make the app run much faster than the traditional app.


- Vulnerability Scanning?

## Security Implications
- Things we have done to make it more secure.

## Next Steps

## Conclusions
