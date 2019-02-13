const express = require('express');
const playerRoutes = require('./app/player/player.route');
const gameRoutes = require('./app/game/game.route');
const { sendError } = require('./app/services/util.service');
const httpStatus = require('http-status-codes');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /player
router.use('/player', playerRoutes);

// mount game routes at /game
router.use('/game', gameRoutes);

router.use((req, res) => { // eslint-disable-line
  if (!req.route) return sendError(res, 'The path of the url match no routes', httpStatus.NOT_FOUND);
});

module.exports = router;
