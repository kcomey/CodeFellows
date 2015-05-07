var index = require('../src/index.js');
var server = require('../src/server.js');
var mongo = require('mongo');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;



describe('http server with persistence', function() {

  it('expect GET /note/1 to show the note if it exists', function (done) {
    chai.request('http://localhost:3000').get('/note/1').end(function(err, res) {
      expect(res.text).to.contain('hello getNote');
      console.log(res.text);
      done();
      }, function (err) {
      throw err;
      });
  });

  it('expect GET /note/1 to show a not found message if it does not exist', function (done) {
    chai.request('http://localhost:3000').get('/note/1').end(function(err, res) {
      expect(res.text).to.contain('hello getNote');
      console.log(res.text);
      done();
      }, function (err) {
      throw err;
      });
  });

  it('expect POST /note to write a note', function () {
    //But should be same size
    //expect(original.length).to.equal(transformed.length);
  });

  it('expect DELETE /note to delete a note', function () {
    //But should be same size
    //expect(original.length).to.equal(transformed.length);
  });

  it('expect PUT /note to update existing note', function () {
    //But should be same size
    //expect(original.length).to.equal(transformed.length);
  });

  it('expect PATCH /note to update existing note (same as PUT)', function () {
    //But should be same size
    //expect(original.length).to.equal(transformed.length);
  });

});







