rem Run it after git add and commit changes

git push origin main
git push heroku main
heroku ps:scale web=1
heroku open
