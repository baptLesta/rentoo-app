const express = require('express');
const gameCtrl = require('./game.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/game - Get list of games */
  .get(gameCtrl.list)

  /** POST /api/game - Create new match */
  .post(gameCtrl.create);

router
  .route('/:gameId')

  /** GET /api/game/:gameId - Get game */
  .get(gameCtrl.get)

  /** DELETE /api/game/:gameId - Remove game */
  .delete(gameCtrl.remove);

/** Load game when API with userId route parameter is hit */
router.param('gameId', gameCtrl.load);

module.exports = router;
