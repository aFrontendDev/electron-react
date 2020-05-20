# Visual Regression - Automation In Cypress

## Setup
Simply Run:
```javascript
npm i
```

## Run In Visual Mode
```javascript
npm run tests
```

## Run In Headless Mode
```javascript
npx cypress run --headless --spec='Cypres/integration/modules/*.spec.js'
```
Above runs all of that suite in headless mode, whereas without it would run everything in each folder.
