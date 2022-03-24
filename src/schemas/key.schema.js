const Joi = require('joi')

const user = Joi.string()
const keyName = Joi.string()
const units = Joi.number()
const date = Joi.string()
const retirement = Joi.string()
const delivery = Joi.string()

const createKeySchema = Joi.object({
  user: user.required(),
  keyName: keyName.required(),
  units: units.required(),
  date: date.required(),
  retirement: retirement.required(),
  delivery: delivery.required()
})

const updateKeySchema = Joi.object({
  user: user,
  keyName: keyName,
  units: units,
  date: date,
  retirement: retirement,
  delivery: delivery
})

module.exports = { createKeySchema, updateKeySchema }