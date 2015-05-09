var request = require('superagent');

request
  .post('http://localhost:3000/note')
  .send({ noteBody: 'This is a note for my assignment3', Author: 'Kendall' })
  .set('Accept', 'application/json')
  .end(function(err, res){

  });




