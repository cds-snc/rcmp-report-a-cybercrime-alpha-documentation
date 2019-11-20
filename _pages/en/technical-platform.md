---
layout: page
title: "Technical platform"
lang: en
permalink: "/technical-platform/"
trans_url: "/platforme-technique/"
---

# A modern, secure, and scalable tech stack

![Stack]({{ site.baseurl }}/assets/img/tech.png){:width="500 px"}

When chosing technologies for service delivery, CDS uses open-source solutions, which are widely used, frequently updated,  work on both server and client, focused on the user, iterative development and continuous testing. This makes the product more likely to ship on time with a high level of security and fewer bugs. Using the following technologies and standards aligns with the [Government of Canada Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html).

You can see the [frontend](https://github.com/cds-snc/report-a-cybercrime/blob/master/frontend/utils/loadTesting.js) and [api](https://github.com/cds-snc/report-a-cybercrime/blob/master/api/utils/loadTesting.js) utilities and [Azure Pipeline](../assets/docs/azure-pipeline.pdf)for more details.

# Engineering choices
 > * **JavaScript:** This is effectively the only programming language that web browsers can  run to build web pages. It is the language of the browser, which allows the team to use a single language across both the frontend and backend of the system. It has security and efficiency backed in.
 > * **React:** This is a JavaScript library created by Facebook. It allows developers to build high-quality robust applications, resources and tools quickly by composing components together.
 > * **GraphQL API:** GraphQL is a user/client-centric interface between the web app and the databases. It provides powerful data validation and allows users to get the data they want in a single request.
 > * **Microservices:** These are a software architectural style that structure an application as a collection of separate services. Building larger services out of smaller services make these more resilient and easier to change over time since a microservice is a stand-alone service that can be (re)built in just a couple of weeks.
 > * **Kubernetes:** This is an open-source platform for running microservices together. It provides performance and scalability from the start. 
 > * **Cloud:** Using Kubernetes as our platform means our application runs wherever Kubernetes runs. During the life of the project, this portability let us move between the RCMP's Microsoft Azure AKS as well as Google's GKE and Amazon's EKS.

# Benefits of these choices

> *  **Cost:** Keeping the cost of change low is an important theme across the tech choices we have made. Managing switching cost allows us to move along with industry or switch providers as the market evolves.
> *  **Security:** The GraphQL API is strictly-typed. This allows us to prevent attackers so that they are not able to use data to hack the database. Kubernetes also makes it easy to harden the service against attacks by enforcing a single entrypoint. We've also used docker containers that only use what's needed to operate (nothing more) and a package manager with buit-in vulnerability scanning.
> *  **Code maintainability:** Following a microservice approach allows us to break the overall service into pieces that are highly maintainable and testable, loosely coupled, and independently deployable. A central tenet of React is the practice of writing your web application in separate blocks called _components_. This means grouping together all the code and styling to create UI elements (for example, the banner). This makes code easy to understand and testable on its own. It also makes it easy to reuse components in multiple locations. 
> *  **System visibility:** Kubernetes makes it easy to centralize logging and get a view into how well the system is running.
> *  **System reliability:** Using React and GraphQL allows us to minimize the amount of network traffic required to use the application. The reliability guarantees from Microsoft, together with Kubernetes' robust architecture, gives us confidence that the system will have high availability.
> *  **Accessibility:** Building our application out of React components has allowed us to ensure and test for basic accessibility requirements from the start of the project (for example, keyboard navigation and screen reader usage) and to work towards conforming with at least WCAG 2.1AA.
> *  **Bilingualism:** We have used a React library called `lingui` to help make the application bilingual from the start of the project. This allows us to test and refine the experience in French, as easily as we can that in English.
> *  **Performance:** To achieve an app that is fast, we used Google Cloud and Azure Kubernetes. But how fast is fast? Load tested showed that the application can handle 120 reports per second (~430,000 per hour). This was 5,000 times faster than the current fraud reporting system (The Canadian Anti-Fraud Centre received 150,000 calls and 1,200 emails[1]). We performed load testing using the [k6](https://docs.k6.io) load testing tool. This allowed us to simulate people filling out the form and see how the application behaves when users access it simutaneously. 
  
# DevOps

We use GitOps. That essentially means [GitHub](https://github.com/cds-snc/report-a-cybercrime) is the "single source of truth" for our application. This allows us to iterate quickly, by deploying multiple times per days.

When a developer makes a pull request (PR) to GitHub and that PR is approved and merged, this triggers the pipeline (a .yaml file) in Azure. The pipeline runs a series of npm commands (lints the code, checks translations, compiles), builds a container of the respective repo area and pushes the container(s) to ACR (Azure Container Registry). We then have a program called Flux running in our AKS (Azure Kubernetes Service) cluster that watches the registry and pulls new images into the cluster.
