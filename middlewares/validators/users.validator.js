const Joi = require('joi');

const userSchema = Joi.object().keys({
  age: Joi.number().integer().min(0).max(100),
  gender: Joi.string().valid('male', 'female'),
}); // .or('age', 'gender');

/*const getQueryErrors = (incomingdata) => {
  const result = userSchema.validate(incomingdata);
  return result.error;
};

module.exports = { getQueryErrors }; */

// How we can define this validator as a global middleware / middleware
const validateSearchQuery = (req, res, next) => {
  const { gender, age } = req.query;
  // const result = userSchema.validate({gender: gender, age: age})
  const result = userSchema.validate({ gender, age });
  if (result.error) {
    return res.status(422).json(result.error);
  }
  //return result.error;
  req.addTestKey = 'Random Stuff'; // This is how we registered our local middleware
  //req.query = 'Random Stuff'; -> It gives {status: Not Found} in postman response object
  next(); // next middleware if it doesn't fail out
  // we can create newly created midleware in global level like index.js that doesnot make sense
};

module.exports = { validateSearchQuery };
