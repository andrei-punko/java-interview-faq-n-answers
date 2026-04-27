@echo off
if not exist "github-pages-content-generator\target\github-pages-content-generator.jar" (
  echo ERROR: JAR not found: github-pages-content-generator\target\github-pages-content-generator.jar
  echo Build it first, e.g. cd github-pages-content-generator ^&^& mvn package
  exit /b 1
)

call generate.bat

git add --all
git commit -m "Add content"

git fetch
git rebase origin/master
git push origin master
