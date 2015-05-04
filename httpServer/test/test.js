var chaiHttp = require('chai-http');
var chai = require('chai');
var expect = chai.expect;

chai.use(chaiHttp);

describe('chai-http', function() {
  it('expect status to be code 200', function (done) {
    chai.request('http://www.google.com').get('/').end(function(err, response) {
      expect(response).to.have.status(200);
      done();
    }, function (err) {
      throw err;
    });
  });

  it('expect to return raw data from Google', function(done) {
    chai.request('http://www.google.com').get('/').then(function(response) {
      console.log(response);
      done();
    }, function (err) {
      throw err;
    });
  });
});







