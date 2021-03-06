import {Router} from 'express';
import playerCtrl from './player.controller';

const router = Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/player - Get list of players */
  .get(playerCtrl.list)

  /** POST /api/player - Create new player */
  .post(playerCtrl.create);

router
  .route('/:playerId')

  /** GET /api/player/:movieId - Get player */
  .get(playerCtrl.get)

  /** DELETE /api/player/:movieId - Delete playerr */
  .delete(playerCtrl.remove);

/** Load game when API with userId route parameter is hit */
router.param('playerId', playerCtrl.load);

export default router;
