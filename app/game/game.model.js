const mongoose = require('mongoose');

/**
 * Game Schema
 */
const GameSchema = new mongoose.Schema({
  player1: {
    type: mongoose.Schema.ObjectId,
    ref: 'player'
  },
  player2: {
    type: mongoose.Schema.ObjectId,
    ref: 'player'
  },
  finalScore: [Number],
  sets: [[Number]],
  winner: {
    type: mongoose.Schema.ObjectId,
    ref: 'player'
  },
  looser: {
    type: mongoose.Schema.ObjectId,
    ref: 'player'
  },
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
   * List Data
   * @returns {Promise<Game[]>}
   */
  list() {
    return this.find()
      .exec();
  }
};

/**
 * @typedef Game
 */
module.exports = mongoose.model('Game', GameSchema);
