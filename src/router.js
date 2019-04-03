const handlers = require('./handlers');


const router = (req, res) => {
  const url = req.url;

  if (url === '/') {
    handlers.handlerHome(res,url);
  } else if (url.includes('/currencyList')) {
    handlers.handleCurrList(res);
  }else if(url.includes('.')){
    handlers.handlePublic(res,url);
  } else if(url.includes('/convertor')){
    handlers.handleRate(res,url);
  }else {
    //TODO : 404 handler
  }
};

module.exports = router;
