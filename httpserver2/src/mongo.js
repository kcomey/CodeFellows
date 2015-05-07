var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myproject';

var insertDocuments = function(json) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('Error connecting to DB');
    }

    // Get the first db and do an update document on it
    var myDB = db("learn");

    console.log('works here too');

    myDB.collection('classroom-examples').update({a:1}, {b:1}, {upsert:true},
      function(err, result) {
        if (err) {
          console.log('Insert not working');
        }
        console.log('Inserted 1 document into the document collection');
      }
      );
    db.close();

  });
};

  //db = connect(url[, options], callback);
  // Get the documents collection
  //var collection = db.collection('documents');
  // Insert some documents

exports.insertDocuments = insertDocuments;


  // Open the connection to the server
  //mongoclient.open(function(err, mongoclient) {





