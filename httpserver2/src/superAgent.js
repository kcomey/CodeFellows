var request = require('superagent');

request
  .post('http://localhost:3000/note/1')
  .send({ name: 'Manny', species: 'cat' })
  .set('Accept', 'application/json')
  .end(function(err, res){

  });




