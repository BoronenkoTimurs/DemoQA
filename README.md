Here I'll investigate new features and areas which connected to the WDIO!

WebPage for practise:
https://demoqa.com/

List of commands which I used in this project and which you can use as well if you want to interact with this project:

Run you test:
- npx wdio

Add Allure reporter:
- npm install @wdio/allure-reporter --save-dev
- npm i allure-commandline
- allure generate allure-results && allure open

Setup commands in directory: wdio-playground/
- npm init -y
- npm install @wdio/cli
- npm init wdio .
- npm install --save-dev chromedriver
- npm install wdio-chromedriver-service --save-dev

In the case of issue with git push error(main -> main (fetch first)) use this:
- git fetch origin
- git rebase origin/main
- git merge origin/main
- git push origin main
