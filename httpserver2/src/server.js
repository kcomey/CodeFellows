'use strict';

var server = require('./server_functions');
//var mongo = require('./mongo_functions');
var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

// This is the middleware
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', function(req, res) {
  res.send('Please use /note to access pages');
});

app.post('/note', function(req, res) {
  server.writeNote(req, res);
});

app.route('/note/:num')
  .get(function(req, res) {
    console.log('work to server');
    //mongo.getDoc(req, res);
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






