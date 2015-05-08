'use strict';

var server = require('./server_functions');
var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// This is middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', function(req, res) {
  res.send('Please use /note to access pages');
});

app.route('/note/:num')
  .get(function(req, res) {
    server.getNote(req, res);
  })
  .post(function(req, res) {
    server.writeNote(req, res);
  })
  .put(function(req, res) {
    server.putNote(req, res);
  })
  .delete(function(req, res) {
    server.deleteNote(req, res);
  })
  .patch(function(req, res) {
    server.putNote(req, res);
  });

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});






