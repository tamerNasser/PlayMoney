//add current list of available currencies to drop-downs
getcurrency(function(d){
  // console.log(Object.values(d.results));
  buildList(d.results);

});
function buildList(data) {
    console.log(Object.values(data));
  Object.values(data).map(function(currency) {
    console.log(currency["currencyName"]);
    let newOption = document.createElement('option');
    let newOption2 = document.createElement('option');
    newOption.value = currency;
    newOption2.value = currency;
    newOption.textContent = currency.id + " " + currency.currencyName;
    newOption2.textContent = currency.id + " " + currency.currencyName;

    document.getElementById('currencyFrom').appendChild(newOption);
    document.getElementById('currencyTo').appendChild(newOption2);
  })
}

//retrieve values from currencyFrom and currencyTo dropdowns when submit button is pressed
const cashInput = document.getElementById('currencyInput');
const fromButton = document.getElementById('currencyFrom');
const toButton = document.getElementById('currencyTo');

function calculate(){
let fromCash = cashInput.value;
let fromCurrency = fromButton.options[fromButton.selectedIndex].value;
let toCurrency = toButton.options[toButton.selectedIndex].value;
}
// submitButton.addEventListener('click', function() {convertCurrency(fromCash, fromCurrency, toCurrency);}, false);
