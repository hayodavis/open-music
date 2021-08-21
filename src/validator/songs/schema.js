const Joi = require('joi');

const SongPayloadSchema = Joi.Object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  performer: Joi.string().required(),
  genre: Joi.string().required(),
  duration: Joi.number().required(),
});

module.exports = { SongPayloadSchema };
