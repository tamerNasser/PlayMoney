fetch('/currencyList')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    return data.body.results;
  })
  .catch(function(error) {
    return error;
  })
