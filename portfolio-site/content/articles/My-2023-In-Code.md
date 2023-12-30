---
title: "My 2023 in Code"
date: "Dec 30, 2023"
author: "Devin MacGillivray"
excerpt: "A highlight in my year of development, from Modern Data Platforms to Full-Stack Apps and LLM’s"
# If to be linked via sanity, or dont want it displayed in articles & case studies section, set as false
display: true
bannerImage: https://github.com/sendwithus/vic-startup-jobs/assets/52307383/e9ff095d-e7f6-4c5f-ba19-48fa6607d266
---

# 2023…

2023 Was a big year for me personally and technically. I crushed 3000+ pages of Sanderson fantasy novels, got two to many speeding tickets, and built tech solutions at a larger scale than I ever have before.

<br>
It was also a huge year for the tech industry at large. ChatGPT and generative AI took the scene by storm. Interest rate hikes stunted “cheap” investor capital and FAANG layoffs ensued en masse. This lead to the onslaught of articles and YouTube influencers claiming the death of software engineering as a whole.
<br>
<br>

Well we ain’t dead yet, and developing product and data solutions to enhance processes and results is alive as it always will be. This year brought on awesome projects, development, and experience, From leetcode, building out a modern cloud based Data lake(Azure ADLS Gen2, Databricks, PySpark and Azure Data Factory) to dusting off the Full-stack cob**web**s, diving into the world of ChatGPT wrappers and web scraping NextJs server side components.
<br>
<br>

## This year’s Technology Focus

This year focused on a few main areas: Data Engineering, Dashboarding & Analytics, some light machine learning and Full-Stack Web Development. This is not a complete list of everything worked on over the year, but a fun highlight of my favourite works.
<br>
<br>
Javascript will always have a special place in my heart, but we expanded our horizons this year. Picking up Typescript to enhance my full stack web arsenal. I certainly have more learning to go on the nuances, but the speed and confidence provided via typesafety and the type driven editor IntelliSense makes for an incredible developer experience.
<br>
<br>
I grabbed python back off the old bookshelf, and used it all year long to pipe and transform data. Developing internal tooling to automate processes or building and hitting API endpoints to enable integration of data across numerous applications. I developed self serve data objects via PySpark, and orchestrated it all with Azure Data Factory. Even dabbled in a bit of machine learning via Scikit-Learn.
<br>
<br>

### **Main Languages & Tools**

- Python/PySpark
- Typescript
- SQL
- Databricks
- React/NextJS
- PowerBI
  <br>
  <br>

### **Favorite or notable new frameworks and libraries**

- **Databricks:** An incredible platform for developing a data ecosystem, and a true scalable compute powerhouse. Particularly in combination with spark.
- **PySpark**: A fantastic python api for Apache Spark, enabling distributed big data processing and computing.
- **Scikit-Learn:** Built predictive models for a few datasets with Linear \*\*\*\*Regressions and K Nearest Neighbour classifications.
- **NextJs, Server Side Rendering:** Dabbling in some of the newest react community hype, I built out two different web apps leveraging different tools and technique, Server Side components being a very interesting highlight, effectively enabling a front end as a backend for more complex route development, improved SEO, and lighter client loads.
- **Tanstack/React-Query:** With React themselves shunning the classic useEffect data fetching and state setting pattern, I experimented with a de-facto recommended solution — Tanstack query to fill this hole in the React ecosystem.
- **Langchain:** This tool does an incredibly impressive job simplifying the process of development with public LLM’s. From abstracting the embeddings process for popular LLMs (Think OpenAI) to automating vector storage into your DB via provided functions, a ton of the lifting is done for you with this package.
  <br>
  <br>

# Projects

For me 2023 started off very slow on the personal project front, mainly due to getting my feet under my in a new role with a new stack. But they say the most important thing is to keep building, so I hopped back on the bandwagon later in the year and worked on some cool stuff in my own time. here are 3 quick project highlights for 2023.
<br>
<br>

## A Modern Data Platform

![image](https://github.com/sendwithus/vic-startup-jobs/assets/52307383/071c7d1d-4ea3-4871-ab72-dea6e3adc87a)

By far the largest project this year was building out a full scale cloud based modern data platform on a medallion architecture. Ingesting both structured and unstructured data from various sources like ERP systems, 3rd Party Applications, or internal tools. The purpose here to reduce costs and points of failure associated with on-prem hosting, and to create a one stop repository for facilitating engineering, analytics and machine learning. This enableds defined gold standard data objects built across structured and unstructured sources, and distribute them. Furthering better business decision making on higher quality and more informative data.
<br>
<br>

### Tech Stack:

- **Azure ADLS Gen 2 Storage** - Unstructured File Storage
- **Azure Data factory** - Overall orchestration, and bronze layer extraction pipelines from various sources, Ie. On-prem DBs, blob storage etc.
- **Databricks Notebooks & PySpark** - Data engineering, REST API integrations, ELT & Reverse ETL, data object creation
- **Delta Tables & DeltaLake** - A layer providing structured table storage to parquet files in datalake storage, and enabling fantastic tools such as table time travel, ACID transactions, or structured streaming.
- **Unity Catalog** - Enabling a self-serve analytics layer of defined gold level data objects to drive consistent reporting across the business and promote data democratization.
  <br>
  <br>

### Learnings

This was definitely an accomplishment, and is already platforming many large reporting projects. As im sure you could expect, it has also left us with some takeaways, a few of which were:

- **Balancing cost, data freshness and performance.** This can be a challenge when traced all the way down stream to analytics ready objects. When these stack up with actual needs, sometimes this leaves you with data from different sources, at different levels of freshness. If you want to use those objects together to gain further insights, it leaves you with one more thing to consider. How do you maintain the integrity or usability of a joined set of data which may have an gap in their last refreshes.
- **Make good architectural decisions up front.** This is not shocking, its important to plan out your architecture and orchestration layer up front. It will only get harder to fix as you scale your platform and become more reliant on it. You don’t want to end up with an unmaintainable nest of you could have avoided.
- **Object reusability and duplication.** At some point you will come across valid requirements for slight tweaks on versions of a defined in-use data object, for a different use-case or stakeholder. This appears to be a bit of a never-ending balance, and you’ll have to determine how you want to handle this. Do you maintain multiple business area level data objects, where _their_ version of x transaction table is slightly different? Or do you handle this at the report level, tweaking larger overarching tables in your dashboard? You could also enact a data Autocracy and refuse to drift from a single definition of a “Sale”, but this probably isn't the solution.
  <br>
  <br>

## Sift-AI: **A Full-Stack AI powered web app with GPT-3**

[To Github Project](https://github.com/devhmac/sift-ai#readme)

<div style="display:flex">
     <div style="flex:1;padding-right:10px;">
          <img src="https://github.com/devhmac/Final_portfolio/assets/52307383/1141c05e-7fc1-4d11-9a1d-b3e727dffceb" width="700"/>
     </div>
     <div style="flex:1;padding-left:10px;">
          <img src="https://github.com/devhmac/Final_portfolio/assets/52307383/c0125d43-2e66-4f4d-9d5d-ed924b9afb3c" width="700"/>
     </div>
</div>
<br>
<br>
It wouldnt have been a 2023 without a GPTwrapper-esk app sparked by the LLM and ChatGPT hype of this year. I wanted to experiment with some of the very cool new tools evolving in this space, so I build an application allowing users to upload a PDF document, and have a full on conversation with it, powered by AI.
<br>
<br>

### Tech Stack:

**FrontEnd**

- Typescript
- NextJS
- Tailwindcss
- Shadcn Components

**BackEnd**

- NextJS API routes
- Planetscale PostGres Database
- Pinecone DB Vector Database
- Prisma ORM
- Tanstack & tRPC
- LangChain - parsing and enabling the vectorization of your document for LLM Context

**Other Packages and Libraries**

- Kinde Authentication
- OpenAI: GPT-3 LLM
- Uploadthing - AWS S3 document upload abstraction layer
  <br>
  <br>

This is by no means an original idea, tons of people were building variations on apps like this in 2023, my inspiration came from one of my previous roles where I oversaw municipal customer facing teams. They had to know and distribute a TON of information on different programs, offerings, policies, and procedures, all of which with their own specific nuances. For these teams, sifting thought the immense amount of documentation to find the single piece you were looking for was a huge challenge, leading to errors, frustration, or giving up on providing accurate information all together. Heres a free 2024 startup idea, expand upon this codebase, allowing for the LLM context scoping to cross all documents uploaded by a user. Build a platform where orgs upload their customer support or policy and proceedure documents. Then provide an internal chatbot for front line teams to quickly prompt your internal knowledgebase for specific details required, all while assisting your users or customers in real time.
<br>
<br>
I utilized a few cool techniques for this project, including streamed AI responses into the chat client, and a fully flushed out optimistic chat state update system complete with rollback on error for the best user experience and responsiveness. Mainly it was a fantastic dive back into building Full-stack web apps after a bit of a break, getting my CRUD/REST API/UX/State Management juices flowing again.
<br>
<br>

## Minr: A Product Pricing and Analytics web scraping platform

[To Github Project](https://github.com/devhmac/Minr)

<img width="1000" alt="Screenshot 2023-12-27 at 2 50 45 PM" src="https://github.com/devhmac/Final_portfolio/assets/52307383/5071f112-fb83-47b8-8ba1-c48ef73c1927">
<br>
<br>

My second web app of the year, and 2023's least finished project as of right now (Unless you count my 2023 advent of code run forgotten about on day 7). I intend to take this with me into 2024 and build on its functionality and design. I will update the repo above with my additions. Minr enables you to _mine_ your product marketplace pricing data, and track it over time. Users add a link, which is then scraped on a recurring schedule, being saved and updated in its MongoDB store. It then presents product pricing analytics back to the user in the form of a product dashboard, including price changes over time/% change etc., and hopfully in the future product search metrics. A popular products component allows users to browse popular products already being tracked by my web scraper. This was also my first project using MongoDB which was a fun experience.
<br>
<br>

### Tech Stack

**FrontEnd**

- Typescript
- NextJS
- Tailwindcss

**BackEnd**

- MongoDB
- Mongoose - MongoDB object modeling
- Cheerio - Web Scraping HTML Parsing
- BrightData - Scraping proxy/Anti bot detection and unlocking
- Cron(Or an alternative)- Light weight task scheduler to scrape added products over time

  <br>
  <br>

Doing a ton of PowerBi based analytics and dashboard development this year, I was really interested in trying my hand at a React/Web based analytics platform and I think this will make a cool base for that exercise.

I came across some other real world product offerings in this space and was shocked at the prices being payed for out of date technologies, and poor ux. However I pretty quickly realized where these premiums come from, web scraping is a PAIN. In fact as of right now, I still have product prices as a hard coded valu, so I can work on the rest of my app functionality in peace. Soon i'll have to go back to fiddling with the timebomb that is HTML price data parsing. Did I mention different site locals are inconsistent? Once you’re thrilled to have a successful scraping pipeline for _amazon.com_, you’ll realize _amazon.ca_ has different HTML layouts and class names, breaking your parse scripts… let the frustration ensue. Currently im only set up to scrape from amazon, but adding other marketplaces could be a future addition. Lots more I plan to do in the future, like build out a user system allowing users to save and easily track products via a full user product dashboard. I also think hosting a python based ML model API would be pretty interesting, perhaps enabling some predictive analytics, or optimal purchase time data.
<br>
<br>

# Takeaways and yearly Recap

<br>
Overall a really exciting year with a ton of learning. The bulk of my work being in the data space, picking up PySpark, working with cloud platforms like Azure & Databricks, and unstructured file storage, or building automated PowerBi dashboards, and Full Stack web. I also dabbled in a little bit of machine learning with Scikit-Learn, developing a regression model to predict the likely of yearly spend if an app user base do a set of features. Next year I want to start the DS&A grind a little more seriously and finish the neetcode 150. I started some casual leetcoding this year and had a fun time working through the problems leetcode problem sets and honing my skills.
<br>
<br>

**3 Main things I took away from this year, and want to keep top of mind for the new year**

- Speed to MVP is important, build something that works, and then iterate on it once you’ve begun to solve the problem. Avoid analysis and planning paralysis. Delaying a functional solution by endlessly sketching out the most polished version usually isn’t worth the delay. Get yourself off the ground and then when you determine you have the right approach, iterate and build the improved version 2.
  <br>
  <br>
- Keep an opportunity mindset. Dont look at everthing that lands on your desk as an inconvenince. See it as an opportunity to flex your muscles, create value, and build something cool.
  <br>
  <br>
- Finally, I just have to keep building! I’m definitely guilty of binging and then burning myself out on personal project work. Next years focus is going to be that of consistency and sustainability, improve 1% every day and push myself to the next level.

<br>
Happy trails and see you in 2024.
