require("babel/register")({experimental: true});
var bodyParser = require('body-parser')


var renderToString = require('./render_to_string');
var express = require('express');
var app = express();

var React = require('react');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.post('/', function (req, res) {
  renderToString(req.body.component, req.body.props, function(s){
    res.end(s)
  });
})

app.listen(3001);
