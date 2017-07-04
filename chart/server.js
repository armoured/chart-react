var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./src/index.js');

app.get('/', function(request, response) {
  //response.send('Hello world!\n');
  response.send(ReactDOMServer.renderToString(Component));
});

var PORT = 3000;
app.listen(PORT, function() {
  console.log('listening on ' + PORT);
});
