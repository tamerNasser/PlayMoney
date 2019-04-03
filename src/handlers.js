const path = require('path');
const fs = require('fs');
const request = require('request')
const urlHTTP = require('url')
const querystring = require('querystring')
const config = require('./config')
const EX_API_KEY = config.APIKEY
console.log(EX_API_KEY);
const exType = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  jpg: 'image/jpg',
  gif: 'image/gif',
};

const handleServer500 = (res, err) => {
  res.writeHead(500, {"content-Type":exType.html})
  res.end("<h1>Sorry, there was an error in the server.</h1><br/><h2>ERROR CODE: 500</h2><br/>Error details: <br/>" + err)
}
const handlerHome = (res) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
    if (err) {
      handleServer500(res,err);
    } else {
      res.writeHead(200, {
        'content-type': exType.html
      })
      res.end(file)
    }
  })
}
const handlePublic = (response, url) => {
  let filePath = path.join(__dirname, "..","public", url)
  const extension = url.split('.')[1]
  fs.readFile(filePath, (err, file) => {
    if (err) {
      handleServer500(response, err)
    } else {
      response.writeHead(200, {
        'content-type': exType[extension]
      })
      response.end(file)
    }
  })
}

const handleCurrList = (response) =>{

  request('https://free.currencyconverterapi.com/api/v6/currencies?apiKey=596d75a4b41be91979c1', (error, body) => {
    if (error) {
      handleServer500(response,"DATA NOT FOUND");
    }
    else {
      response.writeHead(200,{'content-Type':'text/html'})
      response.end(JSON.stringify(body))
    }
  })
}

const handleRate = (res,url)=>{
  const query = querystring.parse(urlHTTP.parse(url).query)

  request(`https://free.currencyconverterapi.com/api/v6/convert?q=${query.from}_${query.to}&compact=ultra&apiKey=${EX_API_KEY}`, (error, body) => {
    if (error) {
      handleServer500(res,"DATA NOT FOUND");
    }
    else {
      res.writeHead(200,{'content-Type':'text/html'})
      // console.log(Object.values(JSON.parse(body.body))[0]);
      res.end((Object.values(JSON.parse(body.body))[0]).toString())
    }
  })
}

module.exports = {
  handlePublic,
  handlerHome,
  handleCurrList,
  handleRate
}
