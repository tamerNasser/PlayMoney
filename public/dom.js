const cashInput = document.getElementById("currencyInput");
const fromButton = document.getElementById("currencyFrom");
const toButton = document.getElementById("currencyTo");
const submitButton = document.getElementById("changebtn");
//add current list of available currencies to drop-downs
getcurrency(function(d) {
  console.log(Object.values(d));
  buildList(d.results);
});

function buildList(data) {
  // console.log(Object.values(data));
  Object.values(data).map(function(currency) {
    // console.log(currency["currencyName"]);
    let newOption = document.createElement("option");
    let newOption2 = document.createElement("option");
    newOption.value = currency;
    newOption2.value = currency;
    newOption.textContent = currency.id + " " + currency.currencyName;
    newOption2.textContent = currency.id + " " + currency.currencyName;

    fromButton.appendChild(newOption);
    toButton.appendChild(newOption2);
  });
}

submitButton.addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    console.log(
      fromButton.options[fromButton.selectedIndex].textContent.substr(0, 3)
    );
    calculate(
      fromButton.options[fromButton.selectedIndex].textContent.substr(0, 3),
      toButton.options[toButton.selectedIndex].textContent.substr(0, 3),
      cashInput.value
    );
  },
  false
);
