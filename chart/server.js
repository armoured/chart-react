var express = require('express');
var app = express();
//var React = require('react');
//var ReactDOMServer = require('react-dom/server');
//var Component = require('./src/App.js');

app.get('/', function(request, response) {
  response.sned('Hello world!\n');
  response.send(html);
});

var PORT = 9000;
app.listen(PORT, function() {
  console.log('listening on ' + PORT);
});
