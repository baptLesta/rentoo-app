const Joi = require('joi');

module.exports = {
  // POST /api/demographic-data
  getDemographicData: {
    body: {
      categorie: Joi.string().required()
    }
  }
};
