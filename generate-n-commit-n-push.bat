
call generate.bat

git add --all
git commit -m "Add content"

git fetch
git rebase origin/master
git push origin master
