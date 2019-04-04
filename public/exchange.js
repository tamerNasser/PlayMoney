let test = require('./test.js');

function convertCurrency(fromCash, fromCurrency, toCurrency){
  let rate = 1.5;  //need to simply getRate

  return fromCash * rate;

// let fromCash = cashInput.value;
// let fromCurrency = fromButton.options[fromButton.selectedIndex].value;
// let toCurrency = toButton.options[toButton.selectedIndex].value;
}

module.exports = convertCurrency;
