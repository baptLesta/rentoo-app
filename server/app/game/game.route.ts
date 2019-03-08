import { Router } from 'express';
import gameCtrl from './game.controller';

const router = Router(); // eslint-disable-line new-cap

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


router
  .route('/player/:playerId')

  /** GET /api/game/player/:playerId - Get game */
  .get(gameCtrl.listForPlayer);


/** Load game when API with userId route parameter is hit */
router
  .param('gameId', gameCtrl.load);

export default router;
