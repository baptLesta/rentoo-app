const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

let idPlayerRecord1, idPlayerRecord2;

/**
 * root level hooks
 */

after(async () => {
  const removePlayer = async (idPlayer) => {
    await request(app)
      .delete(`/api/player/${idPlayer}`);
  };

  const removePlayersPromise = [idPlayerRecord1, idPlayerRecord2].map(removePlayer);
  await Promise.all(removePlayersPromise);


  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
});

before(async () => {
  const playerRecord1 = {
    player: {
      name: 'mockPlayer1'
    }
  };
  const playerRecord2 = {
    player: {
      name: 'mockPlayer1'
    }
  };

  function createPlayer(playerRecord) {
    return new Promise((resolve2) => {
      request(app)
        .post('/api/player')
        .send(playerRecord)
        .expect(httpStatus.CREATED)
        .then((res) => {
          resolve2(res.body.player.id);
        });
    });
  }

  const playersPromise = [playerRecord1, playerRecord2].map(createPlayer);
  [idPlayerRecord1, idPlayerRecord2] = await Promise.all(playersPromise);
});

describe('## Games APIs', () => {
  let game;

  describe('# POST /api/game', () => {
    it('should create a new game', (done) => {
      const gameRecord = {
        player1: idPlayerRecord1,
        player2: idPlayerRecord2,
        sets: [[1, 2], [5, 3], [3, 5]]
      };

      request(app)
        .post('/api/game')
        .send(gameRecord)
        .expect(httpStatus.CREATED)
        .then((res) => {
          game = res.body.game;
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
