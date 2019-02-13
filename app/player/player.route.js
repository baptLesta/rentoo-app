const express = require('express');
const playerCtrl = require('./player.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/players - Get list of players */
  .get(playerCtrl.list)

  /** POST /api/players - Create new player */
  .post(playerCtrl.create);

router
  .route('/:player_id')

  /** GET /api/players/:movieId - Get movie */
  .get(playerCtrl.get);

router
  .route('/:player_id')

  /** GET /api/players/:movieId - Get movie */
  .get(playerCtrl.get);

module.exports = router;
