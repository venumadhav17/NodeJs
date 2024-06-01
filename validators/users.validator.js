const Joi = require('joi');

const userSchema = Joi.object().keys({
  age: Joi.number().integer().min(0).max(100),
  gender: Joi.string().valid('male', 'female'),
}); // .or('age', 'gender');

const getQueryErrors = (incomingdata) => {
  const result = userSchema.validate(incomingdata);
  return result.error;
};

module.exports = { getQueryErrors };
