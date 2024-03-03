# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

The challenge was to build week-expense-chart with some json api calls to make it more interactive and dynamic.

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![My work - Desktop](<Expenses chart component.png>)


### Links

- Solution URL: [https://github.com/sabah02/Expense-Chart]
- Live Site URL: [https://sabah02.github.io/Expense-Chart/]

## My process

Firstly I figured out and learned how to fetch the json data to display on the html page. I learned the fetch() 
API and how it works. Then I figured out how I can layout the elements and style them.

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned about the following concepts

  - `fetch()`
  - `CSS positions`
  - `how to add styel in js`
  - `how to add child element in js`

### Continued development

I want to learn more about `CSS positioning` as I am still not clear with concepts and want to work with more APIs.

### Useful resources

- [Learn about JSON](https://www.youtube.com/watch?v=cj3h3Fb10QY&ab_channel=HostingerAcademy) - This helped me to learn the fetch() method in JS and gave some insights of promises in JS.
- [CSS positions](https://www.youtube.com/watch?v=jx5jmI0UlXU&ab_channel=WebDevSimplified) - This resource helped me
to learn about different positons which are static, relative, absolute and fixed.

## Author

- Frontend Mentor - [@sabah02](https://www.frontendmentor.io/profile/yourusername)


**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**


Fetch Api
  - used to get data from json file
  - use fetch(address or url)
     .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
     })
     .then(jsonData => {
        console.log(jsonData);
     })
     .catch(error => {
      console.error('Error fetching data: ', error)
     });

  - Info about `fetch()` code
    - `fetch()` is a web API in JS used for making HTTP request to   servers in this case my remote computer.

    - `fetch()` API returns `Promise`

    - `Promise` represents the completion or failure of the asynchronous operation.
      - If the operation is successful (i.e., server responds with a 200-299 code that is `OK status`), the promise is fulfilled, and it resolves (`resolve` refer to the action taken when a Promise successfully completes its asynchronous operation which means that the operation it represents has been successfully completed and the Promise transitions to a fulfilled state) to a Response object containing information about the response from the server.

      - If the operation encounters an error (e.g., network issues, server error), the Promise is rejected and it contains information about the error.

    - Promises have methods like .then()
      and .catch()
      - .then(response => {
        //Handle successful response
      })
      - .then() method returns a new Promise

      - .catch(error => {
        //Handle error
      })

    - The below statement is also called Guard clause
    - if(!res.ok) {
      console.log('Problem');
      return;
    }

    - `so in the above code`
      - `fetch(address or url)` - this statement call a fetch() api and sends request to the url mentioned
      - `.then(response => {` - this statement call the .then() method which has a callback arrow function as its argument.The callback function takes the response returned by the promise as the argument and performs some function using it
      - `if(!response.ok) {` - this statement checks if the response by the promise is between 200-299 i.e. a `OK` status or not if the if the promise resolves to not `OK` respnse then it does something
      - `throw new Error('Network response was not ok');` - in this statement if the response was not ok it throws a error which contains message 'Network response was not ok'.
      - `return response.json();` - in this statement if the response was ok and promise was resolved `.json()` method converts or parses the JSON which is in a javascript object format is returned. It's worth noting that this method also returns a Promise. It asynchronously reads the response body to completion and then resolves with the result of parsing the JSON.
      - `then(data => {` - in this statement the data which was resolved by promise is passed as an argument to a callback arrow function is passed to .then method.
      - `console.log(data)` - this statement logs the json object data on to the console.
      - `catch(error => {` - in this statement the .catch methond 
      handles the error if the promise has not been resolved. It's worth mentioning that the .catch() method is invoked if any error occurs during the entire Promise chain, including network errors, JSON parsing errors, or any other errors that may occur within the Promise chain.
      - `console.error('Fetch error: ', error);` - this statment displays the error which was returned by the promise

CSS

absolute - The element will be positioned relative to the closest positioned ancestor.

relative - The element will be positioned relative to its original position.

`https://www.youtube.com/watch?v=cOw6tgH6P20&ab_channel=CodeWithHarry`

static - default position of any element
         Cannot apply top, bottom, left, right, z-index property

absolute - The element will be positioned relative to the closest positioned ancestor.

  
            

      


  