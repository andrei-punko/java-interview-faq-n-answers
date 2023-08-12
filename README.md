
# Java interview questions and answers

[![pages-build-deployment](https://github.com/andrei-punko/java-interview-faq-n-answers/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/andrei-punko/java-interview-faq-n-answers/actions/workflows/pages/pages-build-deployment)

<a href="https://andrei-punko.github.io/java-interview-faq-n-answers"><img src="images/button_generated-site.png" alt="Generated site" height="45"/></a>
<a href="https://boosty.to/andd3dfx"><img src="images/button_donate.png" alt="Donate" height="45"/></a>

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
- Modify [content.txt](src/content.txt) to change content
- Modify [template.html](templates/template.html) (only) if you need to change view template
- Run [generate.bat](generate.bat). It will delete and regenerate index.html
- Use [index.html](index.html) locally or:
- Commit changes to the repository to fix them in web. One minute after, after when
[GH workflow](https://github.com/andrei-punko/java-interview-faq-n-answers/actions) finished - updated site will be
available by original [link](https://andrei-punko.github.io/java-interview-faq-n-answers)

Instead of generate & commit steps you could use [generate-n-commit-n-push.bat](generate-n-commit-n-push.bat) script
