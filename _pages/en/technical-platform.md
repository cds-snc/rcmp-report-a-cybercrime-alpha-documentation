---
layout: page
title: "Technical Platform"
lang: en
permalink: "/technical-platform/"
trans_url: "/platforme-technique/"
---

## Engineering details

### Choices

- Cloud

  - we are deploying the product on RCMP's Microsoft Azure AKS. The service can also be deployed on Google GKE or Amazon EKS.

- JavaScript

  - JavaScript is a programming language that web browsers use to build web pages.

- React

  - React is a JavaScript library created by Facebook.
  - It contains resources and tools for building fast, robust, and network sensitive web applications.

- GraphQL API

  - GraphQL is the interface between the web app and the databases

- Microservices

  - Microservices are a software architectural style that structures an application as a collection of separate services.

- Kubernetes

  - Kubernetes is an open-source platform for running microservices together.

### Gains from these choices

- Security

  - Using GraphQL allows us to prevent attackers are not able to use data to hack the database (for example, by using a SQL injection attack).
  - Using Kubernetes makes it easy to harden the service against attacks by enforcing a single entrypoint into the service.

- Code maintainability

  - A central tenent of React is the practice of writing your web application in separate blocks called _components_. This entails grouping together all the code and styling needed to create a UI element (for example, the phase banner).
  - This makes it easy to understand and test this part of the code on its own, and also makes it easy to reuse this code at multiple locations.
  - following a microservice approach allows us to break the overall service into pieces that are highly maintainable and testable, loosely coupled, and independently deployable.

- System visibility

  - Kubernetes makes it easy to centralize logging and get a view into how well the system is running.

- System reliability

  - Using React and GraphQL allows us to minimize the amount of network traffic required to use the application.
  - The reliability guarentees from Microsoft together with Kubernetes' robust architecture gives us confidence that the system will have high availability.

- Accessibility

  - Building our application out of React components has allowed us to ensure and test for basic accessibility requirements from the start of the project (for example, keyboard navigation and screen reader usage) and to work towards at least WCAG 2.1AA conformance.

- Bilingualism

  - We have used a React library called `lingui` to make the application bilingual from the start of the project.
  - This allows us to test and refine the experience in French as easily as we can that in English.

## Stack/Architecture diagram

[RCMP Architecture Diagram](../assets/docs/rcmp-architecture-diagram.pdf)

## DevOps

We use GitOps. That essentially means GitHub is our "single source of truth" for our application.

When a dev makes a pull request to github and that PR is approved and merged, this triggers the pipeline (a .yaml file) in Azure. The pipeline runs a series of npm commands (lints the code, checks translations, compiles), builds a container of the respective repo area and pushes the container(s) to ACR (Azure Container Registry). We then have a program called Flux running in our AKS (Azure Kubernetes Service) cluster that watches the registry and pulls new images into the cluster.

More detailed Azure DevOps Pipeline doc: [Azure Pipeline](../assets/docs/azure-pipeline.pdf)

## What does the victim get because of these choices

- Trust factors (https?)
- Load Testing results?
- Vulnerability Scanning?

## Security Implications

- Using GraphQL to prevent hacking the database.
- Using Kubernetes to against attacks by enforcing a single entrypoint into the service. 
- Scrumbling the personal information in both protypes

## Next Steps

## Conclusions
