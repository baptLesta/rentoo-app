import { Router } from 'express';
import playerRoutes from './app/player/player.route';
import gameRoutes from './app/game/game.route';
import { sendError } from './app/services/util.service';
import * as httpStatus from 'http-status-codes'

const router = Router(); // eslint-disable-line new-cp

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

export default router;
