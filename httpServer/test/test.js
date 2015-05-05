var chaiHttp = require('chai-http');
var chai = require('chai');
var expect = chai.expect;

chai.use(chaiHttp);

describe('http server', function() {
  it('expect status code to be 200', function (done) {
    chai.request('http://localhost:8888').get('/').
    end(function(err, res) {
      expect(res).to.have.status(200);
      done();
    }, function (err) {
      throw err;
    });
  });

  it('expect content to be html', function (done) {
    chai.request('http://localhost:8888').get('/').
    end(function(err, res) {
      expect(res).to.be.html;
      done();
    }, function (err) {
      throw err;
    });
  });

  // Testing /greet
  it('expect /greet/Kendall to return Howdy Kendall!', function(done) {
    chai.request('http://localhost:8888').get('/greet/Kendall').
    end(function(err, res) {
      expect(res.text).to.contain('Howdy Kendall!');
      done();
    }, function (err) {
      throw err;
    });
  });

  // Testing /time
  it('expect /time to return current time', function(done) {
    chai.request('http://localhost:8888').get('/time').
    end(function(err, res) {
      // Time now
      var nowDate = new Date();
      // Time returned from page request
      var serverDate = res.text.match(/is\s(.+)<\/h3>/i);
      serverDate = Date.parse(serverDate[1]);
      nowDate = Date.parse(nowDate);
      expect(serverDate).to.be.closeTo(nowDate, 1);

      done();
    }, function (err) {
      throw err;
    });
  });

  it('expect content to have header of content-type: text/html', function (done) {
    chai.request('http://localhost:8888').get('/').
    end(function(err, res) {
      expect(res).to.have.header('content-type', 'text/html');
      done();
    }, function (err) {
      throw err;
    });
  });
});







