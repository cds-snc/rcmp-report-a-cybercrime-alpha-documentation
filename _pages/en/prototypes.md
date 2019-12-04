---
layout: page
title:  "Prototyping"
lang: en
permalink: "/prototypes/"
trans_url: "/prototypes/"
---

# Learning by building and testing

By putting tangible things in front of people who've been affected by cybercrime or fraud, we are learning about what they need and adjusting our prototypes to address more of those needs. 

You can find an overview of the prototypes built, tested, and iterated on, so far, below:

 * [Concept 1: Reporting cybercrime with a single identifier](https://rac-concept-1.herokuapp.com/) *(April 2019)*
 * [Concept 2: Finding out where to report scams and online crimes](https://rac-concept-2.herokuapp.com/) *(May 2019)*
 * [Prototype 1: Reporting scams in a structured form](https://testing-sep6.herokuapp.com/p1) *(July 2019)*
 * [Prototype 2: Reporting scams in an open form](https://testing-sep6.herokuapp.com/p2) *(August 2019)*

![Timeline showing the prototypes over time]({{ site.baseurl }}/assets/img/timeline.png#center){:height="350 px"}

# Applying what we are learning to prototypes

Early on, we started building low-fidelity concepts as a quick way to test different directions. We put these in front of seniors, library-goers, and newcomers to Canada. Here are some of the insights we learned:

> * **Make the purpose and value of the service clear and have a strong call to action:**
    * Be explicit about which government or law enforcement entity will receive the report
    * Reassure victims that this is not a scam
    * Make the service accessible where people already report cybercrime and seek help
> * **Use language that resonnates with victims:**
    * Precise, direct, instructional, plain language
    * Clearly define terms: "cybercrime", "evidence", etc.
    * "Scams" rather than "cybercrimes"
    * "Reporting" rather than "sharing"

As we learned more about what victims and police need, we were able to address more of those needs in the prototypes we built. 

## Simply asking for data is not enough

There are many barriers that affect victims' ability to provide information especially without face-to-face interactions with someone who can empathize, provide context, and help a victim orient themselves in their situation. We found that many of the things victims struggle with, police are burdened by as well.

## Victims cannot provide data all at once, or without structure

Because they're upset or confused victims find reporting can get overwhelming very quickly. Police see a lot of incomplete reports, or lack of detail in reports because victims are too overwhelmed to answer all their questions.

 > "Some people will only answer 1 of 6 questions. It's a lot for them to process." *— Frontline staff*
 
We addressed this in the prototype by dividing the current iteration into short sections that are easily digestible.
 
## Victims feel let down and stop reporting when what happens next is not what they expect

Because this is a new experience for victims, they expect a follow-up phone call, an interview, or some kind of written confirmation that something was received. When next steps are not clear, victims might get anxious and call or vicit the police in person to ask for updates.

 > "Victims visit the next day to ask for case updates or send emails to see if we received [their report]" *— Frontline staff*
 
In many cases, victims lose faith and stop reporting altogether because the process is not clear to them. They feel they were let down, when in reality they were not clearly informed at the source. In response to this, we used simple, clear language to let people know why reports are being collected and to inform them of what to expect after reporting.
 
 ![Expectations]({{ site.baseurl }}/assets/img/expectations.png){:width="600 px"}
 
We made sure to also be clear on the final page that the goal of reporting is to stop cybercriminals. This sheds some light on where the report will go next and helps mitigate confusion about the next steps to prevent unnecessary follow-up with local police. We tried to avoid ambiguity as much as possible.
 
 ![After]({{ site.baseurl }}/assets/img/after.png){:width="600 px"}
 
## Victims avoid reporting because they're ashamed and feel at fault
 
When people become a victim of cybercrime, especially for the first time, they often feel embarrassed or afraid. They might think it's their fault, especially if they're not tech-savvy. Because of shame, guilt, and embarrassment, victims avoid telling friends, family and police about what happened. Police also put in extra time to reassure victims of cybercrime that it is not their fault. When victims feel comfortable enough to reach out and report, police are able to help them better understand what happened to them.
 
 > "When [victims] felt safe, and felt that it wasn't their fault, they opened up more and provided more details" * — Officer taking reports over the phone*
 
We try to use blameless words and a blameless tone to acknowledge that people are in a difficult situation, that we're there to listen, and that they're not alone. It's something that frontline staff and call takers do on a daily basis. 

 ![Blameless]({{ site.baseurl }}/assets/img/blameless.png){:width="600 px"}
 
## Victims use different language than law enforcement.

The public does not have the same definitions for words that people in law enforcement do. Police reword required data fields so that victims understand them. Words like "evidence", "suspect", "fraud", "cybercrime" have different definitions depending who you ask. Police often give guidance to people and explain what these terms mean.

Instead of relying on those words alone, we add context and provide examples and guidance. This helps to reduce the mental work that people have to do to fill out the form.

 ![Language]({{ site.baseurl }}/assets/img/language.png){:width="600 px"}

## Victims need to protect themselves from ongoing or future attacks.

We also learned that the biggest problem for victims and the biggest problem for police is the lack of preventative guidance and education around protecting oneself. When people report to the police they expect and hope that the police can help them. When police take calls, or help people in person, they try not to leave them hanging.
 
 > "I'm saying the same sentence day after day to these poor folks... there needs to be more preventative, proactive help. We get a lot of 'I don't know how I fell for this', after the fact" *— Officer taking reports over the phone*
 
Victims are in a state of distress and confusion. They need clear next steps related to getting immediate help and protecting themselves in the future built into the service. When that help is found, they feel safer and more satisfied.

 ![Guidance]({{ site.baseurl }}/assets/img/guidance.png){:width="600 px"}

# Putting prototypes in front of many users

We took what we learned from both victims and police and applied it to prototypes through incremental, but informed changes. To test whether our latest iteration of the reporting form [Prototype 2](https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca/p2) met the needs of victims and police, we examined how the current iteration compared to other versions including the [baseline fraud reporting system](https://report-a-cybercrime.alpha.rcmp-grc.gc.ca/CAFCFRS/) and an earlier iteration [Prototype 1](https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca/p1) in a quantitative experiment. 

![Comparison of prototypes]({{ site.baseurl }}/assets/img/suspects.png){:width="600 px"}
 
 **Prototype 1 features:**
  > * Reduced content based on the baseline fraud reporting form
  > * Structured input fields re-designed to lower cognitive load
  > * Simplified layout, content, and interactions
  > * More accessible language

**Prototype 2 features:**
  > * Open fields that provide flexibility
  > * Language that provides emotional reassurance
  > * Examples and prompts that provide guidance
  > * Clarity on purpose, next steps, and other options

## Comparing prototypes in a quantitative experiment

The purpose of this large-scale test was to know how the current iteration compared in terms of:
> 1. Quality of users' experience reporting a cybercrime
> 2. Users' trust and confidence in the form
> 3. The quality and quantity of reports submitted

We found that participants were more likely to complete and submit a report when using Prototypes 1 and 2. They rated these prototypes as more usable and preferred to use the current iteration prototype (Prototype 2). Prototype 2 maintains quality with improved usability and loyalty, while increasing the quantity of reports submitted.

### Quantity of reports submitted

People using Prototype 1 and Prototype 2 were more likely to complete and submit a report. Over 40% of people who used the baseline opted out of completing and submitting a report.

![Diagram showing quantity of reports submitted]({{ site.baseurl }}/assets/img/quantity.png){:width="500 px"}

### Experience using the service

People report higher levels of usablity for both Prototype 1 and Prototype 2 compared to the baseline form.

![Graph showing experience using the service]({{ site.baseurl }}/assets/img/experience.png){:width="500 px"}

### Experience and intention to use the site

People report greater intentions to use the current iteration (Prototype 2) than either the baseline form or Prototype 1.

![Graph showing experience and intention to use the site]({{ site.baseurl }}/assets/img/intention.png){:width="500 px"}

### Trust and confidence

People report equal ratings of trust and confidence in reporting for all three versions of the form. They are also equally likely to recommend each of them.

![Graph showing trust and confidence]({{ site.baseurl }}/assets/img/trust.png){:width="500 px"}

### Report quality

Each report was rated by three RCMP staff members and averaged. Reports from the current iteration (Prototype 2) and the baseline rated as of the same quality.

![Graph showing report quality]({{ site.baseurl }}/assets/img/quality.png){:width="500 px"}
