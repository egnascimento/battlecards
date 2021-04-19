rem Run it after git add and commit changes
git add {files}
git commit -m {Update text}
git push origin main
git push heroku main
heroku ps:scale web=1
heroku open
