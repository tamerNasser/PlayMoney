const path = require('path');
const fs = require('fs');
const request = require('request')

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
  // console.log(data);
  //   if (!data) {
  //
  //   } else {
  //     res.writeHead(200, {
  //       'content-type': 'application/json'
  //     })
  //     res.end(data)
  //   }

}
module.exports = {
  handlePublic,
  handlerHome,
  handleCurrList
}
