const Joi = require(`joi`);

const schema = {

  content: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(140)
  }


};

module.exports = {
  schema
};
