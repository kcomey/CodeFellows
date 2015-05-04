var chaiHttp = require('chai-http');
var chai = require('chai');
var expect = chai.expect;

chai.use(chaiHttp);

describe('http server', function() {
  it('expect status to be code 200', function (done) {
    chai.request('http://localhost:8888').get('/').
    end(function(err, response) {
      expect(response).to.have.status(200);
      done();
    }, function (err) {
      throw err;
    });
  });

  it('expect greet/Kendall to return same', function(done) {
    chai.request('http://localhost:8888').get('/greet/Kendall').
    end(function(err, response) {
      expect(response.text.indexOf('Howdy Kendall!') > 0);
      done();
    }, function (err) {
      throw err;
    });
  });
});







