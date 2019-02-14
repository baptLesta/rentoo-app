const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Games APIs', () => {
  const gameRecord = {
    player1: '5c6532441a1bc426dd45694c',
    player2: '5c65324b1a1bc426dd45694d',
    sets: [[1, 2], [5, 3], [3, 5]]
  };

  let game;

  describe('# POST /api/game', () => {
    it('should create a new game', (done) => {
      request(app)
        .post('/api/game')
        .send(gameRecord)
        .expect(httpStatus.CREATED)
        .then((res) => {
          game = res.body.game;
          // it(res);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/game/', () => {
    it('should get all game', (done) => {
      request(app)
        .get('/api/game')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.success).to.equal(true);
          expect(res.body.games).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/game/', () => {
    it('should delete', (done) => {
      request(app)
        .delete(`/api/game/${game._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.success).to.equal(true);
          expect(res.body.message).to.equal('Deleted game');
          done();
        })
        .catch(done);
    });
  });
});
