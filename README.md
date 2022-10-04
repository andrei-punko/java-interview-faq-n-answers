
# Java interview questions and answers

## Link to generated site:
https://andrei-punko.github.io/java-interview-faq-n-answers

## Prerequisites
- JDK 11
- Maven 3

## Generator and its preparation
[Generator](https://github.com/andrei-punko/github-pages-content-generator) to create a site 
by content from text file using templates added as Git submodule to current project

To build generator - run next command from `github-pages-content-generator` folder:
```
mvn clean install
```

## Update instructions
- Modify [content.txt](src/content.txt) if needed
- Modify [template.html](templates/template.html) if needed
- Run [generate.bat](generate.bat)
- Commit changes to repo

Instead of two last steps could use [generate-n-commit-n-push.bat](generate-n-commit-n-push.bat) script
