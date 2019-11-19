---
layout: page
title: "Technical platform"
lang: en
permalink: "/technical-platform/"
trans_url: "/platforme-technique/"
---

# A modern, secure, and scalable tech stack

![Stack]({{ site.baseurl }}/assets/img/tech.png){:width="500 px"}

Each layer, or service is secure not only because of the choice of technology but due to the process and methodology. The team has tried and adopted modern and security-first technologies and practices from large companies like Facebook, Microsoft, and Google. This tech stack was tested not just once, but multiple times.

This means we have built and tested the prototypes in the cloud, the report are stored in a modern graph database to allow for changing formats and needs, and a bilingual component library. This stack has been running on RCMP's infrastructure since the beginning of summer 2019 and allows RCMP to be safe and fast.

# Engineering choices

When chosing technologies for service delivery, CDS uses open source solutions that are widely used, frequently updated and which work on both server and client, user focus, iterative development and continuous testing, to make the product more likely to ship on time with a high level of security and fewer bugs. Using the following technologies and standards aligns with the [Government of Canada Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html).

- **JavaScript:** This is effectively the only programming language that web browsers can  run to build web pages. It is the language of the browser, which allows the team to use a single language across both the frontend and backend of the system. It has security and efficiency backed in.
- **React:** This is a JavaScript library created by Facebook. It allows developers to build high-quality robust applications, resources and tools quickly by composing components together.
- **GraphQL API:** GraphQL is a user/client-centric interface between the web app and the databases. It provides powerful data validation and allows users to get the data they want in a single request.
- **Microservices:** These are a software architectural style that structure an application as a collection of separate services. Building larger services out of smaller services make these more resilient and easier to change over time since a microservice is a stand-alone service that can be (re)built in just a couple of weeks.
- **Kubernetes:** This is an open-source platform for running microservices together. It provides performance and scalability from the start. 
- **Cloud:** Using Kubernetes as our platform means our application runs wherever Kubernetes runs. During the life of the project, this portability let us move between the RCMP's Microsoft Azure AKS as well as Google's GKE and Amazon's EKS.

# Benefits of these choices

<script>
      var data = [
        ['Observability', 'Kubernetes', 100, 100],
        ['Observability', 'Istio', 100, 100],
        ['Security', 'GraphQL', 100, 100],
        ['Security', 'Flux', 100, 100],
        ['Determinism', 'Flux', 100, 100],
        ['Determinism', 'Emotion', 100, 100],
        ['Determinism', 'React', 100, 100],
        ['Determinism', 'Kubernetes', 100, 100],
        ['Developer Velocity', 'Flux', 100, 100],
        ['Observability', 'Flux', 100, 100],
        ['Observability', 'Google Cloud', 100, 100],
        ['Security', 'Docker', 100, 100],
        ['Security', 'React', 100, 100],
        ['Security', 'Istio', 100, 100],
        ['Security', 'npm', 100, 100],
        ['Observability', 'GraphQL', 100, 100],
        ['Robustness', 'Kubernetes', 100, 100],
        ['Robustness', 'Istio', 100, 100],
        ['Robustness', 'Progressive Web App', 100, 100],
        ['Mobile friendly', 'Progressive Web App', 100, 100],
        ['Mobile friendly', 'GraphQL', 100, 100],
        ['Automation friendly', 'GraphQL', 100, 100],
        ['Automation friendly', 'Github', 100, 100],
        ['Automation friendly', 'Kubernetes', 100, 100],
        ['Automation friendly', 'Sealed Secrets', 100, 100],
        ['Scalability', 'Kubernetes', 100, 100],
        ['Scalability', 'Docker', 100, 100],
        ['Scalability', 'Microservices', 100, 100],
        ['Scalability', 'ArangoDB', 100, 100],
        ['Scalability', 'Google Cloud', 100, 100],
        ['Performance', 'Kubernetes', 100, 100],
        ['Performance', 'ArangoDB', 100, 100],
        ['Performance', 'Emotion', 100, 100],
        ['Performance', 'Google Cloud', 100, 100],
        ['Extensible', 'Kubernetes', 100, 100],
        ['Developer Velocity', 'React', 100, 100],
        ['Developer Velocity', 'GraphQL', 100, 100],
        ['Developer Velocity', 'ArangoDB', 100, 100],
        ['Developer Velocity', 'Github', 100, 100],
        ['Developer Velocity', 'Google Cloud', 100, 100],
        ['Developer Velocity', 'Javascript', 100, 100],
        ['Developer Velocity', 'Emotion', 100, 100],
        ['Developer Velocity', 'npm', 100, 100],
        ['Cloud Native', 'Microservices', 100, 100],
        ['Cloud Native', 'Docker', 100, 100],
        ['Cloud Native', 'Kubernetes', 100, 100],
        ['Composability', 'React', 100, 100],
        ['Composability', 'GraphQL', 100, 100],
        ['Composability', 'Docker', 100, 100],
        ['Composability', 'Microservices', 100, 100],
        ['Composability', 'Emotion', 100, 100],
        ['Security', 'Javascript', 100, 100],
        ['Security', 'Google Cloud', 100, 100],
        ['Security', 'Sealed Secrets', 100, 100],
        ['Maintainability', 'Docker', 100, 100],
        ['Maintainability', 'React', 100, 100],
        ['Maintainability', 'Microservices', 100, 100],
        ['Maintainability', 'Emotion', 100, 100],
        ['Accessibility', 'React', 100, 100],
        ['Accessibility', 'Reach Router', 100, 100],
        ['Testability', 'React', 100, 100],
        ['Testability', 'Jest', 100, 100],
        ['Testability', 'GraphQL', 100, 100],
        ['Reproducibility', 'Flux', 100, 100],
        ['Reproducibility', 'Github', 100, 100],
        ['Reproducibility', 'Docker', 100, 100],
        ['Reproducibility', 'Sealed Secrets', 100, 100],
        ['High Leverage', 'Javascript', 100, 100],
        ['High Leverage', 'ArangoDB', 100, 100],
        ['High Leverage', 'Kubernetes', 100, 100],
        ['High Leverage', 'Microservices', 100, 100],
        ['High Leverage', 'Emotion', 100, 100],
        ['High Leverage', 'Docker', 100, 100],
        ['High Leverage', 'GraphQL', 100, 100],
        ['High Leverage', 'React', 100, 100],
        ['High Leverage', 'Jest', 100, 100],
        ['Portability', 'Kubernetes', 100, 100],
        ['Portability', 'Docker', 100, 100],
      ]
      var color = {
        Security: '#3366CC',
        Observability: '#DC3912',
        'Developer Velocity': '#FF9900',
        Robustness: '#109618',
        'Cloud Native': '#bbc8ca',
        Performance: '#8ab9b5',
        Composability: '#e76f51',
        Extensible: '#de639a',
        Flexibility: '#5b9279',
        Scalability: '#704e2e',
        Maintainability: '#931f1d',
        'High Leverage': '#273c2c',
        Reproducibility: '#531cb3',
        Accessibility: '#944bbb',
        Portability: '#cbaa49',
        Testability: '#a2999e',
        Determinism: '#0d3b66',
        'Mobile friendly': '#119da4',
        'Automation friendly': '#7fd1b9',
      }
      var svg = d3
        .selectAll('#graph')
        .append('svg')
        .attr('width', 960)
        .attr('height', 800)
      var g = svg.append('g').attr('transform', 'translate(200,50)')
      var bp = viz
        .bP()
        .data(data)
        .min(12)
        .pad(4)
        .height(600)
        .width(500)
        .barSize(35)
        .fill(d => color[d.primary])
      g.call(bp)
      g.selectAll('.mainBars')
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)
      g.selectAll('.mainBars')
        .append('text')
        .attr('class', 'label')
        .attr('x', d => (d.part == 'primary' ? -30 : 30))
        .attr('y', d => +6)
        .text(d => d.key)
        .attr('text-anchor', d => (d.part == 'primary' ? 'end' : 'start'))
      function mouseover(d) {
        bp.mouseover(d)
        g.selectAll('.mainBars')
          .select('.perc')
          .text(function(d) {
            return d3.format('0.0%')(d.percent)
          })
      }
      function mouseout(d) {
        bp.mouseout(d)
        g.selectAll('.mainBars')
          .select('.perc')
          .text(function(d) {
            return d3.format('0.0%')(d.percent)
          })
      }
      d3.select(self.frameElement).style('height', '800px')
    </script>


- **Cost**
  - Keeping the cost of change low is an important theme across the tech choices we have made.
  - Managing switching cost allows us to move along with industry or switch providers as the market evolves.

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
  
   ![Load]({{ site.baseurl }}/assets/img/load.png){:width="500 px"}
   
  - We performed load testing using the [k6](https://docs.k6.io) load testing tool. This allowed us to simulate people filling out the form and see how the application behaves when users access it simutaneously. 
  - We determined how long it takes to initially fetch the web app, and how long it takes for the users' data to be submitted to the RCMP server. 
  - Load tested showed that the application can handle 120 reports per second (~430,000 per hour). This was 5,000 times faster than the current fraud reporting system (The Canadian Anti-Fraud Centre received 150,000 calls and 1,200 emails[1]). 
  - See the [frontend](https://github.com/cds-snc/report-a-cybercrime/blob/master/frontend/utils/loadTesting.js) or [api](https://github.com/cds-snc/report-a-cybercrime/blob/master/api/utils/loadTesting.js) utilities for more details.
  
# DevOps

We use GitOps. That essentially means [GitHub](https://github.com/cds-snc/report-a-cybercrime) is the "single source of truth" for our application. This allows us to iterate quickly, by deploying multiple times per days.

When a developer makes a pull request (PR) to GitHub and that PR is approved and merged, this triggers the pipeline (a .yaml file) in Azure. The pipeline runs a series of npm commands (lints the code, checks translations, compiles), builds a container of the respective repo area and pushes the container(s) to ACR (Azure Container Registry). We then have a program called Flux running in our AKS (Azure Kubernetes Service) cluster that watches the registry and pulls new images into the cluster.

More detailed Azure DevOps Pipeline doc: [Azure Pipeline](../assets/docs/azure-pipeline.pdf)
