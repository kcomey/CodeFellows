var mongo = require('./mongo');
var fs = require('fs');

function writeNote(req, res) {
  // Write the note, POST request
  //console.log(req.body);
  console.log('works to here' + req.params.num);
  console.log(JSON.stringify(req.body));
  mongo.insertDocuments(req.body);

  //res.send('Note #:' + req.params.num + ' written successfully!');
}

function getNote(req, res) {
  // Send back the note, GET request
  res.send('hello getNote' + req.params.num);
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

