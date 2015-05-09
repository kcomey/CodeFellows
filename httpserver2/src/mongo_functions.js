var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/classroom-examples';

var insertDocument = function(json) {
  console.log('it is:' + json);
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
            console.log('insert successful');
          });
      });
    });
  });
};

var getDocument = function(noteId) {
  console.log('works to mongo, get id: ' + noteId);
}

exports.getDocument = getDocument;
exports.insertDocument = insertDocument;









