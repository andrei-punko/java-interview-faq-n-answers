
# Java interview questions and answers

[![pages-build-deployment](https://github.com/andrei-punko/java-interview-faq-n-answers/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/andrei-punko/java-interview-faq-n-answers/actions/workflows/pages/pages-build-deployment)

## Link to generated site
https://andrei-punko.github.io/java-interview-faq-n-answers

![QR code with link](./images/QR-code-with-link.png)

## Prerequisites
- Maven 3
- JDK 17

## Generator and its preparation
[Generator](https://github.com/andrei-punko/github-pages-content-generator) to create a site 
by content from text file using templates added as Git submodule to current project

### Init and download submodule
```
git submodule init
git submodule update
```

### Build generator
```
cd github-pages-content-generator
mvn clean install
```

### Update generator code and rebuild it
```
cd github-pages-content-generator
pull origin master
mvn clean install
```

## Update instructions
- Modify [content.txt](src/content.txt) if needed
- Modify [template.html](templates/template.html) if needed
- Run [generate.bat](generate.bat)
- Commit changes to repo

Instead of two last steps could use [generate-n-commit-n-push.bat](generate-n-commit-n-push.bat) script
