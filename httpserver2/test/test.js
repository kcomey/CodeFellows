var index = require('../src/server.js');
var server = require('../src/server_functions.js');
var mongo_functions = require('../src/mongo_functions');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;

describe('http server with persistence', function() {
  // This test is now functional
  it('POST to /note successfully creates a new note', function(done) {
    chai.request('http://localhost:3000')
    .post('/note')
    .send({ noteBody: 'This is a note' })
    .set('Accept', 'application/json')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.text).to.contain('Your note has been saved');
    }, function (err) {
      throw err;
    });
    done();
  });

  // Working on this
  it('expect GET /note/1 to show the note if it exists', function (done) {
    chai.request('http://localhost:3000')
    .get('/note/1')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.text).to.contain('Here is the note you requested:');
      }, function (err) {
        throw err;
      });
    done();
  });

  it('expect GET /note/157 to show a not found message if it does not exist', function (done) {
    chai.request('http://localhost:3000').get('/note/1').end(function(err, res) {
      expect(res.text).to.contain('hello getNote');
      console.log(res.text);
      //done();
      }, function (err) {
      throw err;
      });
    done();
  });



  it('expect DELETE /note to delete a note', function () {
        chai.request('http://localhost:3000').get('/note/1').end(function(err, res) {
      expect(res.text).to.contain('hello getNote');
      console.log(res.text);
      //done();
      }, function (err) {
      throw err;
      });
        done();
  });

  it('expect PUT /note to update existing note', function () {
     chai.request('http://localhost:3000').get('/note/1').end(function(err, res) {
      expect(res.text).to.contain('hello getNote');
      console.log(res.text);
      //done();
      }, function (err) {
      throw err;
      });
     done();
  });

  it('expect PATCH /note to update existing note (same as PUT)', function () {
     chai.request('http://localhost:3000').get('/note/1').end(function(err, res) {
      expect(res.text).to.contain('hello getNote');
      console.log(res.text);
      //done();
      }, function (err) {
      throw err;
      });
     done();
  });

});







