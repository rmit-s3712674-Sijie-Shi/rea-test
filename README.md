# About

This projest is to display two lists of properties, which includes property results and saved properties.

# Getting Started with This React Project 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this project, make sure:
1. You have [node.js](https://nodejs.org/en/) installed in your local machine
2. Pull down this repo and run `npm install`, to install all dependencies. 
3. `npm start`, to run the app in the development mode.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# App testing

This project depends on jest to do the test, all tests in src\App.test.tsx

Start the test with `npm test`

# Features

1. There are two colums to display properties, 
one is property result which displays the properties get from the JSON file,
another is properties saved which displays saved properties,
there will be one saved property by default.
2. Hover on property cards will display the button in different function, 
first function is adding a property from the result column to the saved properties,
second function is to remove a property from the saved properties,
last function is to indicate if the property in result property colum has been added to saved properties column 
3. Each property card has its picture, agency logo and price
