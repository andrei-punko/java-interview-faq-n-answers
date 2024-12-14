# Java interview questions and answers

[![pages-build-deployment](https://github.com/andrei-punko/java-interview-faq-n-answers/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/andrei-punko/java-interview-faq-n-answers/actions/workflows/pages/pages-build-deployment)

<a href="https://andrei-punko.github.io/java-interview-faq-n-answers"><img src="images/button_java-interview-faq.png" alt="Java interview FAQ" height="40"/></a>
<a href="https://www.donationalerts.com/r/andd3dfx"><img src="images/button_donate.png" alt="Donate" height="40"/></a>

## Prerequisites

- JDK 21 (to build content-generator)

## Content generator and its preparation

[Generator](https://github.com/andrei-punko/github-pages-content-generator) to create a site
by content from text file using templates added as Git submodule to a current project

### Init and download Git submodule

```
git submodule init
git submodule update
```

### Build content generator

```
cd github-pages-content-generator
./mvnw clean install
```

### Update generator code and rebuild it

```
cd github-pages-content-generator
pull origin master
./mvnw clean install
```

## Instructions how to add content & deploy it to GitHub

- To change content - modify [content.txt](src/content.txt) 
- To change view template - modify [template.html](templates/template.html) 
- To generate new `index.html` by `content.txt` - run [generate.bat](generate.bat). It will delete and recreate `index.html` file

  Now you could use [index.html](index.html) locally or:
- Commit changes to the GH repository to deploy them into the Web.
  One minute after, when [GH workflow](https://github.com/andrei-punko/java-interview-faq-n-answers/actions) finished,
  updated site will be available by original [link](https://andrei-punko.github.io/java-interview-faq-n-answers)

Instead of generate & commit steps, you could use [generate-n-commit-n-push.bat](generate-n-commit-n-push.bat) script
