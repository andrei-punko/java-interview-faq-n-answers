
del *.html

java -jar bin/github-pages-content-generator.jar src/content.txt bin/template.html index.html
java -jar bin/github-pages-content-generator.jar "src/answers-1.txt" bin/template.html answers-1.html
java -jar bin/github-pages-content-generator.jar "src/answers-2.txt" bin/template.html answers-2.html
java -jar bin/github-pages-content-generator.jar "src/answers-3.txt" bin/template.html answers-3.html
java -jar bin/github-pages-content-generator.jar "src/answers-4.txt" bin/template.html answers-4.html
