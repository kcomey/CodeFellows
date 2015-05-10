var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/classroom-examples';

var putDocument = function(req, res) {
  var json = req.body;
  var noteNum = Number(req.params.num);
  // Set up the connection to the local db
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.dir(err);
    }
    // Connect to the collection
    db.collection('notes', {strict: true}, function(err, collection) {
      if (err) {
        return console.dir(err);
      }
      // Need to check it exists first, then update it if it does
      var query = { noteId: noteNum };
      collection.find(query).toArray(function(err, documents) {
        if (err) {
          throw err;
        }
        var note = documents[0];
        if (!note) {
          res.send('Note not found. Not updated.');
        } else {
          // Ready to rock and roll
          collection.update(query, {$set: json}, {w: 1}, function(err, result) {
          if (err) {
            return console.dir(err);
          }
          var body = 'UPDATED Note ID: ' + noteNum;
          res.send(body);
        });
        }
      });
    });
  });
};

var deleteDocument = function(req, res) {
  var noteNum = Number(req.params.num);
  // Set up the connection to the local db
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.dir(err);
    }
    // Connect to the collection
    db.collection('notes', {strict: true}, function(err, collection) {
      if (err) {
        return console.dir(err);
      }
      // Ready to rock and roll
      var query = { noteId: noteNum };

      // Need to check it exists first, then remove it if it does
      collection.find(query).toArray(function(err, documents) {
        if (err) {
          throw err;
        }
        var note = documents[0];
        if (!note) {
          res.send('Note not found. Try another number.');
        } else {
          collection.remove(query);
          var body = 'Your note (note id: ' + noteNum +
            ') has been deleted.';
          res.send(body);
        }
      });
    });
  });
};

var insertDocument = function(json) {
  // Set up the connection to the local db
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.dir(err);
    }
    // Connect to the collection
    db.collection('notes', {strict: true}, function(err, collection) {
      if (err) {
        return console.dir(err);
      }
      // Ready to rock and roll
      collection.count(function(err, count) {
        json.noteId = count + 1;
        collection.insert(json, {w: 1}, function(err, result) {
          if (err) {
            return console.dir(err);
          }
          var body = 'Your note has been saved with and ID of: ' + json.noteId;
          res.send(body);
        });
      });
    });
  });
};

var getDocument = function(req, res) {
  var noteNum = Number(req.params.num);
  // Set up the connection to the local db
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.dir(err);
    }
    // Connect to the collection
    db.collection('notes', {strict: true}, function(err, collection) {
      if (err) {
        return console.dir(err);
      }
      // Ready to rock and roll
      var query = { noteId: noteNum};
      collection.find(query).toArray(function(err, documents) {
        if (err) {
          throw err;
        }
        var note = documents[0];
        if (!note) {
          res.send('Note not found. Try another number.');
        } else {
          var body = 'Here is the note you requested: <br>' +
            note.noteBody + '<br>' + '(note id: ' + note.noteId + ')';
          res.send(body);
        }
      });
    });
  });
};

exports.getDocument = getDocument;
exports.insertDocument = insertDocument;
exports.deleteDocument = deleteDocument;
exports.putDocument = putDocument;









