---
layout: page
title: "Technical Platform"
lang: en
permalink: "/technical-platform/"
trans_url: "/platforme-technique/"
---

# Technical Platform 

## Engineering choices

- **Cloud:**: We are deploying the product on RCMP's Microsoft Azure AKS. The service can also be deployed on Google GKE or Amazon EKS.
- **JavaScript:** This is a programming language that web browsers use to build web pages.
- **React:** This a JavaScript library created by Facebook. It contains resources and tools for building fast, robust, and network sensitive web applications.
- **GraphQL API:** GraphQL is the interface between the web app and the databases
- **Microservices:** These are a software architectural style that structure an application as a collection of separate services.
- **Kubernetes:** This is an open-source platform for running microservices together.

## What do we gain from these tech choices

- **Security**
  - Using GraphQL allows us to prevent attackers are not able to use data to hack the database (for example, by using a SQL injection attack).
  - Using Kubernetes makes it easy to harden the service against attacks by enforcing a single entrypoint into the service.

- **Code maintainability**
  - A central tenet of React is the practice of writing your web application in separate blocks called _components_. This entails grouping together all the code and styling needed to create a UI element (for example, the phase banner).
  - This makes it easy to understand and test this part of the code on its own, and also makes it easy to reuse this code at multiple locations.
  - Following a microservice approach allows us to break the overall service into pieces that are highly maintainable and testable, loosely coupled, and independently deployable.

- **System visibility**
  - Kubernetes makes it easy to centralize logging and get a view into how well the system is running.

- **System reliability**

  - Using React and GraphQL allows us to minimize the amount of network traffic required to use the application.
  - The reliability guarantees from Microsoft, together with Kubernetes' robust architecture, gives us confidence that the system will have high availability.

- **Accessibility**
  - Building our application out of React components has allowed us to ensure and test for basic accessibility requirements from the start of the project (for example, keyboard navigation and screen reader usage) and to work towards conforming with at least WCAG 2.1AA.

- **Bilingualism**
  - We have used a React library called `lingui` to make the application bilingual from the start of the project.
  - This allows us to test and refine the experience in French as easily as we can that in English.

## Stack/Architecture diagram

[RCMP Architecture Diagram](../assets/docs/rcmp-architecture-diagram.pdf)

## DevOps

We use GitOps. That essentially means [GitHub](https://github.com/cds-snc/report-a-cybercrime) is the "single source of truth" for our application.

When a developer makes a pull request (PR) to GitHub and that PR is approved and merged, this triggers the pipeline (a .yaml file) in Azure. The pipeline runs a series of npm commands (lints the code, checks translations, compiles), builds a container of the respective repo area and pushes the container(s) to ACR (Azure Container Registry). We then have a program called Flux running in our AKS (Azure Kubernetes Service) cluster that watches the registry and pulls new images into the cluster.

More detailed Azure DevOps Pipeline doc: [Azure Pipeline](../assets/docs/azure-pipeline.pdf)

## Building trust with users

An RCMP domain name and the RCMP logo prominently displayed and reassuring language used throughout help to build trust in the service.

## Performance

We've also performed load testing to determine how the application behaves when multiple users access it simutaneously. We want to ensure that the application will perform well under its expected workload. We performed two load tests, one to test how long it takes users to initially fetch the web app, and the other one to test how long it takes for the user's data to be submitted to the RCMP server. To do our load testing we used the [k6](https://docs.k6.io) load testing tool.

  | Test           | Users / sec  | Average user wait |
  | -------------- | :----------: | ----------------: |
  | fetch web page | 100 / second |  149 milliseconds |
  | submit data    | 120 / second |   55 milliseconds |

  See the [frontend](https://github.com/cds-snc/report-a-cybercrime/blob/master/frontend/utils/loadTesting.js) or [api](https://github.com/cds-snc/report-a-cybercrime/blob/master/api/utils/loadTesting.js) utilities for more details.

 **Is 100 users per second enough?**

  - According to the Canadian Anti-Fraud Centre (CAFC), they received more than 150,000 calls every year and approximately 1,200 e‑mails every day about suspected fraud[1].
  - Testing workload: 100x60x60x24x365 = 3,090,528,000 (numbers/annual)
  - Report fraud number: 150,000+1200x365 = 588,000 (numbers/annual)
  - 3,090,528,000/588,000= 5,256 times

Since the load tested is 5,256 times more than the current fraud reporting, the application should be able to handle multiple users well, when they access it simutaneously.

To achieve an app that is this fast, we used Google Cloud and Azure Kubernetes.
