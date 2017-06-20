var http = require ('http');
var express = require('express');
var app = express();


http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('the ip address is - ' + req.ip);
}).listen(8080);
