const http = require('http');
const router = require('./router');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3232;
const server = http.createServer(router);
server.listen(port);
console.log(`server running on: http://${host}:${port}`);
