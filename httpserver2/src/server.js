'use strict';

var mongo = require('./mongo_functions');
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
  // Write the note if you have a POST request
  mongo.insertDocument(req, res);
});

app.route('/note/:num')
  .get(function(req, res) {
    // Send back the note if it exists, otherwise message it does not exist
    mongo.getDocument(req, res);
  })
  .put(function(req, res) {
    // Update the note, PUT or PATCH request
    mongo.putDocument(req, res);
  })
  .delete(function(req, res) {
    // Delete the note, DELETE request
    mongo.deleteDocument(req, res);
  })
  .patch(function(req, res) {
    // Update the note, PUT or PATCH request
    mongo.putDocument(req, res);
  });

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});



