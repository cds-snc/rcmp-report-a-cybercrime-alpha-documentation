---
layout: page
title: "Technical platform"
lang: en
permalink: "/technical-platform/"
trans_url: "/platforme-technique/"
---

# Modern, secure, and scalable

## Tech stack

This is a diagram of the tech stack.

 ![Stack]({{ site.baseurl }}/assets/img/tech.png){:width="500 px"}

Each layer, or service is secure not only because of the choice of technology but due to the process and methodology. The team has tried and adopted modern and security-first technologies and practices from large companies like Facebook, Microsoft, and Google. This tech stack was tested not just once, but multiple times.

This means we have built and tested the prototypes in the cloud, the report are stored in a modern graph database to allow for changing formats and needs, and a bilingual component library. This stack has been running on RCMP's infrastructure since the beginning of summer 2019 and allows RCMP to be safe and fast.

[RCMP Architecture Diagram](../assets/docs/rcmp-architecture-diagram.pdf)

## Engineering choices

- **Cloud:**: We are deploying the product on RCMP's Microsoft Azure AKS. The service can also be deployed on Google GKE or Amazon EKS.
- **JavaScript:** This is a programming language that web browsers use to build web pages.
- **React:** This a JavaScript library created by Facebook. It contains resources and tools for building fast, robust, and network sensitive web applications.
- **GraphQL API:** GraphQL is the interface between the web app and the databases
- **Microservices:** These are a software architectural style that structure an application as a collection of separate services.
- **Kubernetes:** This is an open-source platform for running microservices together.

## What do we gain from these tech choices

- **Security**
  - GraphQL API is strictly-typed. Using GraphQL allows us to prevent attackers so that they are not able to use data to hack the database (for example, by using a SQL injection attack).
  - Docker containers use only what's needed to operate, nothing more. Using Kubernetes makes it easy to harden the service against attacks by enforcing a single entrypoint into the service.
  - The package manager has buit-in vulnerability scanning.

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
  
- **Performance**
  - To achieve an app that is fast, we used Google Cloud and Azure Kubernetes. But how fast is fast?
  - We performed load testing using the [k6](https://docs.k6.io) load testing tool. This allowed us to simulate people filling out the form and see how the application behaves when users access it simutaneously. 
  - We determined how long it takes to initially fetch the web app, and how long it takes for the users' data to be submitted to the RCMP server. 
  - Load tested showed that the application can handle 120 reports per second (~430,000 per hour). This was 5,000 times faster than the current fraud reporting system (The Canadian Anti-Fraud Centre received 150,000 calls and 1,200 emails[1]). 
  - See the [frontend](https://github.com/cds-snc/report-a-cybercrime/blob/master/frontend/utils/loadTesting.js) or [api](https://github.com/cds-snc/report-a-cybercrime/blob/master/api/utils/loadTesting.js) utilities for more details.
  
 ![Load]({{ site.baseurl }}/assets/img/load.png){:width="500 px"}

## DevOps

We use GitOps. That essentially means [GitHub](https://github.com/cds-snc/report-a-cybercrime) is the "single source of truth" for our application. This allows us to iterate quickly, by deploying multiple times per days.

When a developer makes a pull request (PR) to GitHub and that PR is approved and merged, this triggers the pipeline (a .yaml file) in Azure. The pipeline runs a series of npm commands (lints the code, checks translations, compiles), builds a container of the respective repo area and pushes the container(s) to ACR (Azure Container Registry). We then have a program called Flux running in our AKS (Azure Kubernetes Service) cluster that watches the registry and pulls new images into the cluster.

More detailed Azure DevOps Pipeline doc: [Azure Pipeline](../assets/docs/azure-pipeline.pdf)
