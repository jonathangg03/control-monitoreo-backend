const Joi = require('joi')

const caseNumber = Joi.number().integer()
const client = Joi.string()
const date = Joi.string()
const enterHour = Joi.string()
const firstReplyHour = Joi.string()
const engineer = Joi.string()
const description = Joi.string()
const actions = Joi.string()

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
  actions: actions
})

module.exports = { createTicketSchema, updateTicketSchema }
