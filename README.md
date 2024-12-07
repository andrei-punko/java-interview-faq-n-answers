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

## Update instructions

- Modify [content.txt](src/content.txt) to change content
- Modify [template.html](templates/template.html) (only) if you need to change view template
- Run [generate.bat](generate.bat). It will delete and regenerate index.html
- Use [index.html](index.html) locally or:
- Commit changes to the repository to deploy them into the web.
  One minute after, when [GH workflow](https://github.com/andrei-punko/java-interview-faq-n-answers/actions) finished,
  updated site will be available by original [link](https://andrei-punko.github.io/java-interview-faq-n-answers)

Instead of generate & commit steps, you could use [generate-n-commit-n-push.bat](generate-n-commit-n-push.bat) script
