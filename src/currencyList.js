const request = require('request');
const config = require('./config')
const currencyList = () => {
  request(`https://free.currencyconverterapi.com/api/v6/currencies?apiKey=${config.APIKEY}`, (error, response, body) => {
    if (error) {
      return new TypeError("Sorry, there was an error in the API call");
    }
    else {
      console.log("Data from request",body);
      return body.toString();
    }
  })
};


module.exports = currencyList;
