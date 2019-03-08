import Game from './game.model';
import Player from '../player/player.model';
import { to, sendError, sendSuccess } from '../services/util.service';
import gameService from './game.service';

/**
 * Load game and append to req.
 */
function load(req, res, next, id) {
  Game.findById(id)
    .then((game) => {
      req.game = game; // eslint-disable-line no-param-reassign

      return next();
    })
    .catch(e => next(e));
}

/**
 * Get game
 * @returns {Game}
 */
function get(req, res) {
  const game = req.game;

  return sendSuccess(res, { game: game.toWeb() });
}

/**
 * Create new movie
 * @property {string} req.body.title - The title of movie.
 * @property {string} req.body.description - The description of movie.
 * @returns {Movie}
 */
async function create(req, res) {
  const gameRecord = req.body;
  const gameRecordWithFinalResults = gameService.addFinalResults(gameRecord);
  let err;
  let game, winner, looser;

  [err, game] = await to(Game.create(gameRecordWithFinalResults));
  if (err) return sendError(res, err, 422);
  [err, game] = await to(Game.findById(game).populate('player1').populate('player2'));

  [err, winner] = await to(Player.findById(gameRecordWithFinalResults.winner));
  if (err) return sendError(res, err, 422);
  await winner.addWin();

  [err, looser] = await to(Player.findById(gameRecordWithFinalResults.looser));
  if (err) return sendError(res, err, 422);
  await looser.addLoose();

  return sendSuccess(res, { game: game.toWeb() }, 201);
}

/**
 * Update existing game
 * @property {string} req.body.title - The title of game.
 * @property {string} req.body.description - The description of game.
 * @returns {game}
 */
async function update(req, res) {
  let err;

  let game = req.game;
  const data = req.body;
  game.set(data);

  [err, game] = await to(game.save()); // eslint-disable-line prefer-const
  if (err) return sendError(res, err);

  return sendSuccess(res, { game: game.toWeb() });
}

/**
 * Get movie list.
 * @property {number} req.query.skip - Number of games to be skipped.
 * @property {number} req.query.limit - Limit number of games to be returned.
 * @returns {Game[]}
 */
async function list(req, res) {
  const { limit = 5, skip = 0 } = req.query;
  let games, err;

  [err, games] = await to(Game.list(limit, skip)); // eslint-disable-line prefer-const
  if (err) return sendError(res, err, 422);

  games = games.map(game => game.toWeb());
  return sendSuccess(res, { games });
}

/**
 * Get movie list.
 * @property {number} req.query.skip - Number of games to be skipped.
 * @property {number} req.query.limit - Limit number of games to be returned.
 * @returns {Game[]}
 */
async function listForPlayer(req, res) {
  const playerId = req.params.playerId;

  const { limit = 5, skip = 0 } = req.query;
  let games, err;

  [err, games] = await to(
    Game.listForPlayer(playerId, limit, skip)
  ); // eslint-disable-line prefer-const
  if (err) return sendError(res, err, 422);

  games = games.map(game => game.toWeb());
  return sendSuccess(res, { games });
}

/**
 * Delete game.
 * @returns {Game}
 */
async function remove(req, res) {
  let err;
  let game = req.game;

  [err, game] = await to(game.remove()); // eslint-disable-line prefer-const
  if (err) return sendError(res, 'error occured trying to delete the game');

  return sendSuccess(res, { message: 'Deleted game' }, 200);
}

export default { load, get, create, update, list, listForPlayer, remove };
