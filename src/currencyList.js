const request = require('request');

const currencyList = () => {
  request('https://free.currencyconverterapi.com/api/v6/currencies?apiKey=596d75a4b41be91979c1', (error, response, body) => {
    if (error) {
      return new TypeError("Sorry, there was an error in the API call");
    }
    else {
      console.log(body);
      return body;
    }
  })
};


module.exports = {
  currencyList
};
