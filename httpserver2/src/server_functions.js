var mongo = require('./mongo_functions');

function writeNote(req, res) {
  // Write the note if you have a POST request
  mongo.insertDocument(req.body);
}

function getNote(req, res) {
  // Send back the note if it exists, otherwise message it does not exist
  mongo.getDocument(req, res);
}

function putNote(req, res) {
  // Update the note, PUT or PATCH request
  mongo.putDocument(req, res);
}

function deleteNote(req, res) {
  // Delete the note, DELETE request
  mongo.deleteDocument(req, res);
}

exports.writeNote = writeNote;
exports.getNote = getNote;
exports.putNote = putNote;
exports.deleteNote = deleteNote;
