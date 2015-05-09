var mongo = require('./mongo_functions');
var fs = require('fs');

function writeNote(req, res) {
  console.log(req.body);
  // Write the note if you have a POST request
  mongo.insertDocument(req.body);
  res.send('Your note has been saved');
}

function getNote(req, res) {
  // Send back the note, GET request
  var noteId = req.params.num
  var returnNote = mongo.getDocument(req.params.num);
  //res.send(returnNote);
  res.send('going to put note ' + noteId + ' here');
}

function putNote(req, res) {
  // Update the note, PUT or PATCH request
  res.send('hello putNote');
}

function deleteNote(req, res) {
  // Delete the note, DELETE request
  res.send('hello deleteNote');
}

exports.writeNote = writeNote;
exports.getNote = getNote;
exports.putNote = putNote;
exports.deleteNote = deleteNote;
