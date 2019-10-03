---
layout: page
title:  "Prototypes"
lang: en
permalink: "/prototypes/"
trans_url: "/prototypes/"
---

# Learning by building and testing prototypes

In Alpha, the delivery team focused on building prototypes, testing those with users, learning from them, and iterating based on what we learned. 

By putting something tangible in front of people who have been affected by cybercrime or fraud, we were able to learn about what they needed and adjust prototypes to address more of those needs. 


-----

You can find an overview of the prototypes that have been built, tested, and iterated on, below.

![Timeline showing the prototypes over time]({{ site.baseurl }}/assets/img/timeline.png)

---

## [Concept 1: Reporting cybercrime with a single identifier](https://rac-concept-1.herokuapp.com/) 
*(Built in April 2019)*

### Goals
The first concept was based on the hypothesis that the effort it takes to submit information around a cybercrime event should be correlated to the impact of the crime. 

### Features
A low-burden tool to alert the RCMP of a suspicious email address, phone number, or website:
 * Landing page that outlines the purpose
 * Omnibox input field that submits a single identifier
 * Data visualization that shows victims they are not alone

### Outcomes
Testing the concept with seniors and newcomers to Canada, we learned about:
 * Making the purpose and value of the service clearer and having a strong call to action
 * Being explicit about which government or law enforcement entity is receiving the report
 * Using language that resonnates with victims
   * Precise, direct, instructional language
   * "Scams" rather than "cybercrimes"
   * "Reporting" rather than "sharing"
   
 ---

## [Concept 2: Finding out where to report scams and online crimes](https://rac-concept-2.herokuapp.com/) 
*(Built in May 2019)*

### Goals
The second concept was based on the hypothesis that constructing a visual narrative can help triage victims to the appropriate avenue for sharing their cybercrime experience.

### Features
A decision tree to find the most relevant reporting option:
 * Side-by-side cards with illustrations that present a choice 
 * Navigation to one clear reporting option that aligns with choices made  
 
### Outcomes
Testing the concept with library-goers, we learned about:
 * How victims think about cybercrime, how they make decisions on reporting options and expectations from different channels
 * Reasons why many victims prefer to talk to someone over the phone:
   * Emotional reassurance
   * Advice and guidance
   * They believed it would result in action
 * Expectations victims have in receiving a follow-up:
   * For validation
   * To confirm their report was received
   * In case more information is needed
  
---

## [Prototype 1: Reporting scams in a structured form](https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca/p1) 
*(Built in July 2019)*

### Goals
This prototype was designed to test how victims of cybercrime engage with a longer form that asks preset questions. It was based on the [baseline fraud reporting form](https://report-a-cybercrime.alpha.rcmp-grc.gc.ca/CAFCFRS/), and was re-designed to lower the cognitive load by simplifying layout, content, and interactions. It reduces content for easier reading and uses more accessible language.

### Features
 * Structured input fields
 * Landing page with purpose and what to prepare
 * Divided into short skippable sections
   * Event description (what, when, how)
   * Money lost (focus on impact rather than fraud type)
   * Scammer details (suspect information pared down)
   * Evidence (file upload without description)
   * Contact details (only asking for name, email, phone number)
 * Review report information
 * Reference number provided

### Outcomes
Testing the concept with library-goers, we learned about:
 * How to provide more direct and specific questions
 * The need to contextualize the unknown National Cybercrime Coordination Unit (NC3)
 * The need for victims to predict what they will be asked to do next, both at the onset and from page-to-page
 * Dates are sometimes difficult to recall, especially if it was a long time ago or if it took place over a period of time
 * That victims are unsure how they can provide scammer details if they do not know who the scammer is for certain
 * How victims expect to share evidence, especially non-computer related evidence or multiple documents at a time
 * Usability issues that could be fixed prior to large-scale usability testing

---

## [Prototype 2: Reporting scams in an open form](https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca/p2) 
*(Built in August 2019)*

### Goals
This prototype was designed to test how victims respond to an open form. It applies learnings from research with both victims and police of jurisdiction, to learn about providing flexiblity, emotional reassurance, guidance/recommendations, and clear expectations.

### Features
 * Mostly open text fields
 * Timeframe as date range
 * Reassuring language
 * Examples and prompts
 * Clues about the suspect and evidence combined
 * Asking about the impact of the scam
 * Contact information (name, email, postal code)
 * Next steps, recommended links to get help, other reporting options

### Outcomes
Testing the concept with library-goers, we learned about:
 * Clarifying the purpose of reporting (what police would do with reports)
 * How to add visual emphasis to action items related to people's goals
 * Allowing for approximate date picking
 * Providing examples to reduce ambiguity
 * Words that reduce confusion in French
 * Usability issues that could be fixed prior to large-scale usability testing
  
---  
  
### Designing based on what we learn from research
  
#### Victims cannot provide data all at once, or without structure.
 > "Some people will only answer 1 of 6 questions. It's a lot for them to process." 
 — Frontline staff
 
#### Victims feel let down and stop reporting when what happens next is not what they expect.
 > "Victims visit the next day to ask for case updates or send emails to see if we received [their report]" 
 — Frontline staff
 
 ![Expectations]({{ site.baseurl }}/assets/img/expectations.png)
 
 ![After]({{ site.baseurl }}/assets/img/after.png)
 
 #### Victims avoid reporting because they're ashamed and feel at fault.
 > "When [victims] felt safe, and felt that it wasn't their fault, they opened up more and provided more details" 
 — Officer taking reports over the phone
 
 ![Blameless]({{ site.baseurl }}/assets/img/blameless.png)
 
 #### Victims use different language than law enforcement.
Police reword required data fields so that victims understand them.

 ![Language]({{ site.baseurl }}/assets/img/language.png)

 #### Victims need to protect themselves from ongoing or future attacks.
 > "I'm saying the same sentence day after day to these poor folks... there needs to be more preventative, proactive help. We get a lot of 'I don't know how I fell for this', after the fact" 
 — Officer taking reports over the phone

 ![Guidance]({{ site.baseurl }}/assets/img/guidance.png)
 

---

## Putting prototypes to the test in a quantitative study
*(Run in September 2019)*

### Goals
To evaluate the effectiveness of an online service designed to help victims report a cybercrime to the police, three versions of the service were compared: the [baseline fraud reporting system](https://report-a-cybercrime.alpha.rcmp-grc.gc.ca/CAFCFRS/), [Prototype 1](https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca/p1), and [Prototype 2](https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca/p2).

The purpose was to test whether the current iteration of the reporting form meets the needs of victims and police of jurisdiction (on a larger scale).

We examined how the current iteration compared to other versions in terms of 
1. the quality of users' experience reporting a cybercrime
2. Users' trust and confidence in the form
3. The quality and quantity of reports submitted

![Comparison of prototypes]({{ site.baseurl }}/assets/img/suspects.png)

### Results

#### Quantity of reports submitted

People using Prototype 1 and Prototype 2 were more likely to complete and submit a report. Over 40% of people who used the baseline opted out of completing and submitting a report.

![Diagram showing quantity of reports submitted]({{ site.baseurl }}/assets/img/quantity.png)

#### Experience using the service

People report higher levels of usablity for both Prototype 1 and Prototype 2 compared to the baseline form.

![Graph showing experience using the service]({{ site.baseurl }}/assets/img/experience.png)

#### Experience and intention to use the site

People report greater intentions to use the current iteration (Prototype 2) than either the baseline form or Prototype 1.

![Graph showing experience and intention to use the site]({{ site.baseurl }}/assets/img/intention.png)

#### Trust and confidence

People report equal ratings of trust and confidence in reporting for all three versions of the form. They are also equally likely to recommend each of them.

![Graph showing trust and confidence]({{ site.baseurl }}/assets/img/trust.png)

#### Report quality

Each report was rated by three RCMP staff members and averaged. Reports from the current iteration (Prototype 2) and the baseline rated as of the same quality.

![Graph showing report quality]({{ site.baseurl }}/assets/img/quality.png)

### Conclusions

We found that participants were more likely to:
- Complete and submit a report when using the prototypes
- Rate the prototypes as more usable
- Use the current iteration prototype 

We achieved these results by:
- Reducing the number of form fields
- Writing easy-to-read questions
- Providing clarity on purpose and next steps
- Including emotional reassurance and guidance

The current iteration (Prototype 2): 
- Maintains quality with improved usability and loyalty
- Increases the quantity of reports submitted
