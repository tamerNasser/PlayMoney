//add current list of available currencies to drop-downs

function buildList(data) {
  let len = Object.keys(data).length;
  let x = 0;

  while (x < len) {
    let newOption = document.createElement('option');

    newOption.setAttribute('value', data[x][1]);
    newOption.textContent = data[x]['id'] + " " + data[x]['currencyName'];

    document.getElementsByClassName('currencyFrom').appendChild(newOption);
    document.getElementsByClassName('currencyTo').appendChild(newOption);

    len++;
  }
}
