# مصرفجي PlayMoney

*مصرفجي PlayMoney* is a web app that provides up-to-date currency exchange calculation on over 150 currency pairs.


---




<img src="https://user-images.githubusercontent.com/32282170/55547483-119ef480-56da-11e9-8a6a-46a0830a1ae3.png" alt="alt text" width="300px" height="auto">

The 2 API requests are made on the back-end using the Request module:

* one to populate the drop-down menus with currently available currencies
* another to return the most recent currency exchange rate from the API

The calculation for the currency is achieved on the front-end using a fetch request to the server.

## Stretch goals
App was originally intended to serve as ATM finder with geolocation for Braille and disabled customers in remote areas.

## Working on this project:
- clone the repo
- create a file called config.js inside the src directory
- use the following template to add inside the config file:
```js
  const config = {
    APIKEY : [insert your own api key here]
  }
  module.exports = config
```
- pull request!



## Project started by @Tamer and @John. Everything updated on this repository is done by me.
