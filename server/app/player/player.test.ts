import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { expect, config } from 'chai'; // eslint-disable-line import/newli-after-impot
import * as httpStatus from 'http-status-codes';

import app from'../../index';

config.includeStack = true;

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
