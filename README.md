# pinia-vue2-watch-bug-repro
Repro for watch options bug in pinia with vue2

## Step1: Clone this repo to local
```
git clone git@github.com:reuwi/pinia-vue2-watch-bug-repro.git
```
## Step2: install dependencies
```
npm install
```

## Step3: open [http://localhost:8081/](http://localhost:8081/) in browser

You will get an alert with: 'lol changed', however this alert should not popup, cause we only revised the value of bar. 
