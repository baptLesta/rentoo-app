import Joi from 'joi';

export default {
  // POST /api/demographic-data
  getDemographicData: {
    body: {
      categorie: Joi.string().required()
    }
  }
};
