var http = require ('http');
var express = require('express');
var app = express();

app.use(express.static('public'))


app.get('/ip', function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('the ip address is - ' + req.ip);
}).listen(3000);
