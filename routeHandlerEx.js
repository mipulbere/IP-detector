var express = require('express');
var app = express();

app.get('/routeHandler', function (req, res, next) {
console.log('The response will be sent by the next function!')
  next()
}, function (req, res) {
  res.send('Hello world! I am routing!')
}).listen(8080);
