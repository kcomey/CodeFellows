var mongo = require('./mongo_functions');
var fs = require('fs');

function writeNote(req, res) {
  // Write the note if you have a POST request
  mongo.insertDocument(req.body);
  res.send('Your note has been saved');
}

function getNote(req, res) {
  // Send back the note if it exists, otherwise message it does not exist
  var noteId = req.params.num;
  var returnNote = mongo.getDocument(req.params.num);
  var body = 'Here is the note you requested: <br>' +
    returnNote + '<br>' + '(note id: ' + noteId + ')';
  res.send(body);
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
