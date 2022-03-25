const Joi = require('joi')

const client = Joi.string()
const date = Joi.string()
const hour = Joi.string()
const caseNumber = Joi.string()
const partNumber = Joi.string()
const seriesNumber = Joi.string()
const units = Joi.number()
const partName = Joi.string()
const engineerName = Joi.string()
const description = Joi.string()
const _id = Joi.string()
const __v = Joi.number()

const createReplacementSchema = Joi.object({
  client: client.required(),
  date: date.required(),
  hour: hour.required(),
  caseNumber: caseNumber.required(),
  partNumber: partNumber.required(),
  seriesNumber: seriesNumber.required(),
  units: units.required(),
  partName: partName.required(),
  engineerName: engineerName.required(),
  description: description.required()
})

const updateReplacementSchema = Joi.object({
  client: client,
  date: date,
  hour: hour,
  caseNumber: caseNumber,
  partNumber: partNumber,
  seriesNumber: seriesNumber,
  units: units,
  partName: partName,
  engineerName: engineerName,
  description: description,
  _id: _id,
  __v: __v
})

module.exports = { createReplacementSchema, updateReplacementSchema }
