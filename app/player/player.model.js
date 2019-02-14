const mongoose = require('mongoose');

/**
 * Player Schema
 */
const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  win: {
    type: Number,
    default: 0
  },
  lost: {
    type: Number,
    required: true,
    default: 0
  },
  winningPercent: {
    type: Number
  },
  points: {
    type: Number,
    default: 0
  }
});

/**
 * Methods
 */
PlayerSchema.method({
  toWeb: function() { // eslint-disable-line
    const json = this.toJSON();
    json.id = this._id; // this is for the front end
    return json;
  },
  addWin() {
    this.points = this.points + 2;
    this.win++;
    this.winningPercent = this.win / (this.win + this.lost) * 100;

    this.save();
  },
  addLoose() {
    this.loose++;
    this.winningPercent = this.win / (this.win + this.lost) * 100;

    this.save();
  }
});

/**
 * Statics
 */
PlayerSchema.statics = {
  /**
   * List Players
   * @returns {Promise<List[]>}
   */
  list() {
    return this.find()
      .exec();
  }
};

/**
 * @typedef Player
 */
module.exports = mongoose.model('Player', PlayerSchema);
