var express = require('express');
var app = express();

app.use(express.static('helloWorld'));

app.get('/ip', function(req, res) {
    res.send('the ip address is - ' + req.ip);
});

app.get('/', function (req, res) {
   res.send('This is the FIRST route!');
})


app.get('/route2', function (req, res) {
   res.send('This is the SECOND route!');
})

app.get('/route3', function (req, res) {
   res.send('This is the THIRD route!');
})




var server = app.listen(8081, function () {})
