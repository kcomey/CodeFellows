var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/classroom-examples';

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

      collection.remove({ noteId: 2 });

      //console.log(typeof result);
      //console.log(result);
      console.log('worked, check db');
      // returns the number of documents removed
      console.log(result.nRemoved);

        console.log('works here?');
        if (!result) {
          res.send('Note not found. Try another number.');
        } else {
        var body = 'Your note (note id: ' + req.params.num +
          ') has been deleted.';
        res.send(body);
        }

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









