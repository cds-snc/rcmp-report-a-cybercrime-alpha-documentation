---
layout: page
title: Design workflow
lang: en
trans_url: Processus de conception
---
# Meeting designer and developer expectations

The decisions made for this product stem from research with users, stakeholder interviews or the service blueprint. We use this information to build a local design system that aligns with those requirements. In return, these requirements define different portions of our design system, more specifically the design principles, the questions guidelines and the local component library.

The local component library is designed in Figma, then implemented in a local React component library, and both contribute to the local design system. 

## Figma

### Local component library

In Figma, the local component library is used to quickly compose and prototype ideas originating from research or the product owners.

### Sprint reference

The source of truth, used by developers to implement new features is set in the main iteration and does not change during the sprint. 

Features are used to iterate during a sprint. At the end of a sprint, features that are ready move into the main iteration for next sprint. When moving new features into the main iteration, it is a good idea to update the user flow map.

![Diagram showing RCMP component library file leads to the current sprint file. Current sprint file leads to archived sprint files.](/assets/img/figma-structure.png "Figma file structure schema")

### Archiving

Copies of main iterations are copied into new Figma files. The current sprint is always in the same file. This way, we can always rely on the same Figma URL. When creating an archived copy. Instances of components are detached to prevent breaking archival copies of main iterations. 

![Diagram showing the process to archive a sprint file.](/assets/img/sprint-to-sprint-process.png "Archiving main sprint file")

## Code

### Local component library

The local component library mirrors the component library in Figma. Its important to keep them synchronized. 

Components are built on top of Chakra ui, which is a React component library focused on accessibility. Chakra is very easy to compose and personalize. The best way to adapt Chakra ui to our needs is to create local components that import a Chakra ui component and export a modified or themed version of the same component. this is done to make sure the app aligns with the Web Experience Toolkit (WET) look and feel. 

## Storybook

Each component also contains its own documentation through Storybook.js Documentation is written mostly in MDX (Markdown + JSX) and allows for modular documentation of our local component library. This documentation provides help on how to use and integrate both chakra ui and local components to compose pages, forms or any frontend parts of the app.

Creating or updating Storybook documentation is the responsibility of anyone who creates a new component or updates the core functionality of a component. Documentation usually contains a quick how-to, examples, variants and prop types definitions.

The [Storybook reference site]((https://cds-snc.github.io/report-a-cybercrime/?path=/docs/1-start--page)) is maintained through the codebase and deployed automatically. 

![Diagram displaying how documentation is contained in a component, alongside tests and the component files. ](/assets/img/storybook-modular-documentation.png "Storybook modular documentation")