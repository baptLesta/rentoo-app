import Player from './player.model';
import { to, sendError, sendSuccess } from '../services/util.service';

/**
 * Load player and append to req.
 */
function load(req, res, next, id) {
  Player.findById(id)
    .then((player) => {
      req.player = player; // eslint-disable-line no-param-reassign

      return next();
    })
    .catch(e => next(e));
}
/**
 * Get player
 * @returns {Player}
 */
function get(req, res) {
  const player = req.player;

  return sendSuccess(res, { player: player.toWeb() });
}

/**
 * Create new movie
 * @property {string} req.body.title - The title of movie.
 * @property {string} req.body.description - The description of movie.
 * @returns {Movie}
 */
async function create(req, res) {
  const playerRecord = req.body.player;

  const [err, player] = await to(Player.create(playerRecord));
  if (err) return sendError(res, err, 422);

  return sendSuccess(res, { player: player.toWeb() }, 201);
}

/**
 * Update existing Player
 * @property {string} req.body.title - The title of Player.
 * @property {string} req.body.description - The description of Player.
 * @returns {Player}
 */
async function update(req, res) {
  let err;

  let player = req.Player;
  const data = req.body;
  player.set(data);

  [err, player] = await to(Player.save()); // eslint-disable-line prefer-const
  if (err) return sendError(res, err);

  return sendSuccess(res, { player: player.toWeb() });
}

/**
 * Get movie list.
 * @property {number} req.query.skip - Number of players to be skipped.
 * @property {number} req.query.limit - Limit number of players to be returned.
 * @returns {Player[]}
 */
async function list(req, res) {
  const { limit = 50, skip = 0 } = req.query;
  let players, err;

  [err, players] = await to(Player.list({ limit, skip })); // eslint-disable-line prefer-const
  if (err) return sendError(res, err, 422);

  players = players.map(player => player.toWeb());

  return sendSuccess(res, { players });
}

/**
 * Delete player.
 * @returns {Playerr}
 */
async function remove(req, res) {
  let err;
  let player = req.player;

  [err, player] = await to(player.remove()); // eslint-disable-line prefer-const
  if (err) return sendError(res, 'error occured trying to delete the player');

  return sendSuccess(res, { message: 'Deleted player' }, 200);
}

export default { load, get, create, update, list, remove };
