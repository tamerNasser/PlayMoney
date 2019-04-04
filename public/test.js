let test = require('tape');
let path = require('./exchange.js');

test('currency exchange calculation', function(t) {
  let fromCash = 1000;
  let fromCurrency = "USD";
  let toCurrency = "GBP";

  let actual = path.convertCurrency(fromCash, fromCurrency, toCurrency);
  let expected = 1500

  t.deepEqual(actual, expected, "Should return x");
  t.end();
})


//
// let test = require('tape');
// let index = require('./BL/filter.js');
// let restList = require('./DB/restList.json');
//
// //return key of first object in array
// test ('Example test', function(t) {
//   let arr = (restList);
//   let word = "Fatt"
//
//   let actual = index.findWords(arr, word);
//   let expected = [ {"Fattoush": "Haifa"} ]
//
//   t.deepEqual(actual, expected);
//   t.end();
// })
