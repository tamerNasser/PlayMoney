const path = require('path');
const fs = require('fs');
const getcurrency = require('./currencyList')

const exType = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  jpg: 'image/jpg',
  gif: 'image/gif',
};

const handleServer500 = (res, err) => {
  res.writeHead(500, exType.html)
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
  let filePath = path.join(__dirname, "..", url)
  const extension = url.split('.')[1]
  fs.readFile(filePath, (err, file) => {
    if (err) {
      handleServer500(res, err)
    } else {
      response.writeHead(200, {
        'content-type': exType[extension]
      })
      response.end(file)
    }
  })
}

const handleCurrList = (response) =>{
  let currency = getcurrency.currencyList();
  fs.readFile(currency, (err, file) => {
    if (err) {
      handleServer500(res,err);
    } else {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(file)
    }
  })
}
module.exports = {
  handlePublic,
  handlerHome,
  handlerCurrList
}
