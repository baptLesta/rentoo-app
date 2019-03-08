import {Schema, model} from 'mongoose';

/**
 * Game Schema
 */
const GameSchema = new Schema({
  player1: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  player2: {
    type: Schema.ObjectId,
    ref: 'Player'
  },
  finalScore: [Number],
  sets: [[Number]],
  winner: {
    type: Schema.ObjectId,
    ref: 'player'
  },
  looser: {
    type: Schema.ObjectId,
    ref: 'player'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

/**
 * Methods
 */
GameSchema.method({
  toWeb: function() { // eslint-disable-line
    const json = this.toJSON();
    json.id = this._id; // this is for the front end
    return json;
  }
});

/**
 * Statics
 */
GameSchema.statics = {
  /**
   * List Games in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of Games to be skipped.
   * @param {number} limit - Limit number of Games to be returned.
   * @returns {Promise<Game[]>}
   */
  list({ skip = 0, limit = 5 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .populate('player1')
      .populate('player2')
      .exec();
  },

  /**
   * List Games in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of Games to be skipped.
   * @param {number} limit - Limit number of Games to be returned.
   * @returns {Promise<Game[]>}
   */
  listForPlayer(playerId, { skip = 0, limit = 5 } = {}) {
    return this.find({ $or: [{ player1: playerId }, { player2: playerId }] })
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .populate('player1')
      .populate('player2')
      .exec();
  }
};

/**
 * @typedef Game
 */
export default model('Game', GameSchema);
