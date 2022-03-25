const Joi = require('joi')

const caseNumber = Joi.number()
const client = Joi.string()
const date = Joi.string()
const enterHour = Joi.string()
const firstReplyHour = Joi.string()
const engineer = Joi.string()
const description = Joi.string()
const actions = Joi.string()
const _id = Joi.string()
const __v = Joi.number()

const createTicketSchema = Joi.object({
  caseNumber: caseNumber.required(),
  client: client.required(),
  date: date.required(),
  enterHour: enterHour.required(),
  firstReplyHour: firstReplyHour.required(),
  engineer: engineer.required(),
  description: description.required(),
  actions: actions.required()
})

const updateTicketSchema = Joi.object({
  caseNumber: caseNumber,
  client: client,
  date: date,
  enterHour: enterHour,
  firstReplyHour: firstReplyHour,
  engineer: engineer,
  description: description,
  actions: actions,
  _id: _id,
  __v: __v
})

module.exports = { createTicketSchema, updateTicketSchema }
