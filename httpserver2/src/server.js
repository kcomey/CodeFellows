var mongo = require("./mongo");


function writeNote (res) {
  //write to the data storage
  res.send('hello writeNote');
  //res.json()
}

exports.writeNote = writeNote;
