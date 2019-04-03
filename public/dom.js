//add current list of available currencies to drop-downs

function buildList(data) {
  let len = Object.keys(data).length;
  let x = 0;

  while (x < len) {
    let newOption = document.createElement('option');

    newOption.setAttribute('value', data[x]['id']);
    newOption.textContent = data[x]['id'] + " " + data[x]['currencyName'];

    document.getElementById('currencyFrom').appendChild(newOption);
    document.getElementById('currencyTo').appendChild(newOption);

    len++;
  }
}

function convertCurrency(cash, from, to){
}

//retrieve values from currencyFrom and currencyTo dropdowns when submit button is pressed
const cashInput = document.getElementById('currencyInput');
const fromButton = document.getElementById('currencyFrom');
const toButton = document.getElementById('currencyTo');

let fromCash = cashInput.value;
let fromCurrency = fromButton.options[fromButton.selectedIndex].value;
let toCurrency = toButton.options[toButton.selectedIndex].value;

submitButton.addEventListener('click', function() {convertCurrency(fromCash, fromCurrency, toCurrency);}, false);
