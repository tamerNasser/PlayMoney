const cashInput = document.getElementById('currencyInput').value;
const fromButton = document.getElementById('currencyFrom').options[fromButton.selectedIndex].value;
const toButton = document.getElementById('currencyTo').options[toButton.selectedIndex].value;

fetch('/convertor?from=EUR&to=GBP')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    return(data);
  })
  .catch(function(error) {
    return(error);
  })

  submitButton.addEventListener('submit', function(e) {
    console.log("button")
    convertCurrency(fromCash, fromCurrency, toCurrency);
    event.preventDefault();
  }, false);
