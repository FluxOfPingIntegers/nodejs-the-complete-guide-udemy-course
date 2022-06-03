const http = require('http');

const server = http.createServer((req, rest) => {
  console.log(req);
});

server.listen(3000);