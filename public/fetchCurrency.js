
function getcurrency(cb){
  fetch('/currencyList')
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    // console.log(data);
    // console.log("data body",data.body);
    return cb(JSON.parse(data.body));
  })
  .catch(function(error) {
    return error;
  })
}
