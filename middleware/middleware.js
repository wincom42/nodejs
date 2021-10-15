var express = require('express');
var app = express();

app.use('/', function(req, res, next){
    next();
 });

module.exports = app;