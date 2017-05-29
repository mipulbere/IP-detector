var http = require('http');

http.createServer(function (req, res) {
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({a: 1}));
}).listen(8080);
