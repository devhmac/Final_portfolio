# My portfolio site 👋

An experimental combination of different content delivery methods in the form of my own personal portfolio.

A React/NextJS site with Sass styling built on a combination of a Gray-matter based markdown rendering for in-site blog posts, articles, and projects, and a live Sanity CDN back end.

## Contently Delivery Guide

For skills section and projects, navigate to sanity backend and enter `sanity start` the CDN is set up with the required content framework.

### Blog posts, or in-site projects and

- create a .md file in the content/articles directory.
- the name of your file is the slug(url) to navigate to that page. "syntax-separated-by-dashes.md"

At the top of the page, you must add article frontmatter in the format below

```
---
title: "Phases of a Data Analytics Project"
date: "August 25, 2022"
author: "Devin MacGillivray"
excerpt: "An overview of the data anlytics lifecycle to structure your next data project."

# to display in articles list, false to like to via projects section.
display: true

bannerImage: https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80
---
```

can pretty easily add tags to the frontmatter for future use if I want to filter my articles by tag.

### Still to do

- This lovely site absolutely needs some stylesheet cleanup. Quite a few places where some more reusable stylesheets would be a huge improvement.
