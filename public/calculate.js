const cashInput = document.getElementById('currencyInput').value;
const fromButton = document.getElementById('currencyFrom').options[fromButton.selectedIndex].value;
const toButton = document.getElementById('currencyTo').options[toButton.selectedIndex].value;

let search = "https://free.currencyconverterapi.com/api/v6/convert?q=" + fromButton + "_" + toButton + "&compact=ultra&apiKey=596d75a4b41be91979c1"

fetch('search')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  })

  submitButton.addEventListener('submit', function(e) {
    console.log("button")
    convertCurrency(fromCash, fromCurrency, toCurrency);
    event.preventDefault();
  }, false);
