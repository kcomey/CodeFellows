var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/classroom-examples';

var insertDocuments = function(json) {
  // Set up the connection to the local db
  MongoClient.connect(url, function(err, db) {
    if(err) {
      return console.dir(err);
    }

  db.collection('notes', {strict:true}, function(err, collection) {
    if (err) {
      return console.dir(err);
    }

    var doc1 = {'hello':'doc1'};
    collection.insert(doc1, {w:1}, function(err, result) {
      if (err) {
        return console.dir(err);
      }
      console.log('insert successful');
    });
  });
});
}

exports.insertDocuments = insertDocuments;









