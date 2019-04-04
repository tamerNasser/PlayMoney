
const resultsTxt = document.getElementById('results');


function calculate(frombtn,tobtn,cashInput){
function getRate(from,to,cb){
  fetch('/convertor?from='+from+'&to='+to,cb)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("data",data);
      console.log("from",from);
      console.log("to",to);
      return(cb(data));
    })
    .catch(function(error) {
      return(error);
    })
}

getRate(frombtn, tobtn,function (d){
  console.log("rate",parseFloat(d));
  resultsTxt.value = (cashInput * parseFloat(d)).toFixed(2);
});



}
