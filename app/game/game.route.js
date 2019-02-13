const express = require('express');
const gameCtrl = require('./game.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/players - Get list of players */
  .get(gameCtrl.list)

  /** POST /api/players - Create new match */
  .post(gameCtrl.create);

router
  .route('/:game_id')

  /** GET /api/players/:movieId - Get game */
  .get(gameCtrl.get)

  /** POST /api/favorites - Remove game */
  .delete(gameCtrl.remove);

module.exports = router;
