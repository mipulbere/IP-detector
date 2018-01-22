var http = require ('http');
var express = require('express');
var app = express();

app.use(express.static('public'))

var ipMap = {};

app.get('/ip', function (req, res) {
  console.log("/ip received");
  res.writeHead(200, {'Content-Type': 'text/html'});
  var ip = req.ip;
  // inside the req handler
  if (!ipMap[ip]) {
    console.log("new ip " + ip);
    var ipStat = {
      reqCount: 1,
      lastReqTime: Date.now()
    };
    ipMap[ip] = ipStat;
    console.log("ipStat " + JSON.stringify(ipMap[ip]));
  } else {
    ipMap[ip].lastReqTime = Date.now();
    ipMap[ip].reqCount++;
  }
  console.log("ipStat for ip " + ip + " " + JSON.stringify(ipMap[ip]));
  res.end();
});

app.get('/admin', function (req, res) {
  console.log("/admin recieved");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<!DOCTYPE html><html><body><table>");

  Object.keys(ipMap).forEach(function(key, index) {
      res.write(key + " " + JSON.stringify(ipMap[key]) + "<br/>");

  });
  res.write("</table></body></html>");

  res.end();
});

app.listen(3000);
