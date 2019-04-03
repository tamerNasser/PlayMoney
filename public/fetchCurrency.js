fetch('https://free.currencyconverterapi.com//api/v6/currencies?apiKey=596d75a4b41be91979c1')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  })
