var index = require('../src/server.js');
var mongo_functions = require('../src/mongo_functions');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;

describe('http server with persistence', function() {
  it('POST to /note successfully creates a new note', function(done) {
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
      console.log('test one works');
      done();
    });
  });

  it('expect GET /note/1 to show the note if it exists', function (done) {
    chai.request('http://localhost:3000')
    .get('/note/1')
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      expect(res).to.have.status(200);
      expect(res.text).to.contain('Here is the note');
      expect(res.text).to.contain('note id: 1');
      console.log('test two works');
      done();
      });
    });

  it('expect GET /note/157 to show a not found message if note does not exist',
    function (done) {
    chai.request('http://localhost:3000')
    .get('/note/157')
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      expect(res.text).to.contain('Note not found');
      console.log('test 3 works');
      done();
      });
  });

  it('expect PUT /note/1 to update existing note', function (done) {
     chai.request('http://localhost:3000')
     .put('/note/1')
     .send({ noteBody: 'This is an UPDATED note' })
     .set('Accept', 'application/json')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('UPDATED');
      console.log('test 4 works');
      done();
      });
  });

  it('expect PUT /note/207 to send message if note does not exist', function (done) {
     chai.request('http://localhost:3000')
     .put('/note/207')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('Not updated');
      console.log('test 5 works');
      done();
      });
  });

  it('expect PATCH /note/1 to update existing note (same as PUT)', function (done) {
     chai.request('http://localhost:3000')
     .patch('/note/1')
     .send({ noteBody: 'This is an UPDATED note' })
     .set('Accept', 'application/json')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('UPDATED');
      console.log('test 6 works');
      done();
      });
  });

  it('expect PATCH /note/207 to send message if note does not exist (same as PUT)',
   function (done) {
     chai.request('http://localhost:3000')
     .put('/note/207')
     .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('Not updated');
      console.log('test 7 works');
      done();
      });
  });

  it('expect DELETE /note/204 to send message if note does not exist', function (done) {
      chai.request('http://localhost:3000')
      .del('/note/204')
      .end(function(err, res) {
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('Note not found');
      console.log('test 8 works');
      done();
      });
  });

/*  it('expect DELETE /note/1 to delete a note', function (done) {
      chai.request('http://localhost:3000')
      .del('note/1')
      .end(function (err, res) {
        console.log(err);
        if (err) {
          throw err;
        }
      expect(res.text).to.contain('has been deleted');
      console.log('test 9 works');
      done();
      });
  });*/
});









