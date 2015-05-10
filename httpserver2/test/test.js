var index = require('../src/server.js');
var server = require('../src/server_functions.js');
var mongo_functions = require('../src/mongo_functions');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;

describe('http server with persistence', function() {
  // Test 1 is now functional
/*  it('POST to /note successfully creates a new note', function(done) {
    chai.request('http://localhost:3000')
    .post('/note')
    .send({ noteBody: 'This is a note' })
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      expect(res).to.have.status(200);
      expect(res.text).to.contain('Your note has been saved');
    });
    done();
  });*/

  // Test 2 is now functional
/*  it('expect GET /note/7 to show the note if it exists', function (done) {
    chai.request('http://localhost:3000')
    .get('/note/7')
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      expect(res).to.have.status(200);
      expect(res.text).to.contain('This is a note for my assignment WOW');
      expect(res.text).to.contain('note id: 7');
      });
      done();
  });*/

 // Test 3 is now functional
/*  it('expect GET /note/157 to show a not found message if note does not exist', function (done) {
    chai.request('http://localhost:3000')
    .get('/note/157')
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      expect(res.text).to.contain('Note not found');
      });
    done();
  });*/

  // Test 4 is now functional
/*  it('expect PUT /note/7 to update existing note', function () {
     chai.request('http://localhost:3000')
     .put('/note/7')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('UPDATED');
      });
     //done();
  });*/

  // Test working on it
/*  it('expect PUT /note/207 to send message if note does not exist', function () {
     chai.request('http://localhost:3000')
     .put('/note/207')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('Not updated');
      });
     //done();
  });*/

  // Test 5 is now functional
/*  it('expect DELETE /note/1 to send message if note does not exist', function () {
      chai.request('http://localhost:3000')
      .get('/note/1')
      .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('Note not found');
      //done();
      });
  });*/



  //test to not update because the note does not exist

  it('expect PATCH /note/7 to update existing note (same as PUT)', function () {
     chai.request('http://localhost:3000')
     .patch('/note/7')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('UPDATED');
      });
     //done();
  });

    // Test working on it
  it('expect PATCH /note/207 to send message if note does not exist (same as PUT)',
   function () {
     chai.request('http://localhost:3000')
     .put('/note/207')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('Not updated');
      });
     //done();
  });


/*  // This one is functional but note 10 does not exist for now
  it('expect DELETE /note/10 to delete a note', function () {
      chai.request('http://localhost:3000')
      .delete('/note/10')
      .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('has been deleted');
      });
    done();
  });*/

});







