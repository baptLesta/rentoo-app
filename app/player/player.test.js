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

describe('## Player APIs', () => {
  let player;

  const playerRecord = {
    player: {
      name: 'test'
    }
  };

  describe('# POST /api/player', () => {
    it('should create a new player', (done) => {
      request(app)
        .post('/api/player')
        .send(playerRecord)
        .expect(httpStatus.CREATED)
        .then((res) => {
          player = res.body.player;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/player/', () => {
    it('should get all player', (done) => {
      request(app)
        .get('/api/player')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.success).to.equal(true);
          expect(res.body.players).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/player/', () => {
    it('should delete', (done) => {
      request(app)
        .delete(`/api/player/${player.id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.success).to.equal(true);
          expect(res.body.message).to.equal('Deleted player');
          done();
        })
        .catch(done);
    });
  });
});
