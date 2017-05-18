const Joi = require(`joi`);

const schema = {

  naam: {
    type: String,
    validation: Joi.string(),
    default: `Anoniem`
  },
  content: {
    type: String,
    validation: Joi.string(),
    default: `Geen commentaar.`
  },
  uitstap: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },
  positive: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },
  negative: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  }

  // this.content = content;
  // this.uitstap = uitstap;
  // this.positive = positive;
  // this.negative = negative;
  // this.id = uuid.v4();
  // this.naam = naam;


};

module.exports = {
  schema
};
