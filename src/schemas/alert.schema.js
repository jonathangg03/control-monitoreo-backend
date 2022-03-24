const Joi = require('joi')

const client = Joi.string()
const source = Joi.string()
const date = Joi.string()
const alertHour = Joi.string()
const reportHour = Joi.string()
const contact = Joi.string()
const contactEmail = Joi.string()
const monitorName = Joi.string()
const ticketOpened = Joi.number()
const description = Joi.string()
const actions = Joi.string()
const extraComments = Joi.string()
const _id = Joi.string()
const __v = Joi.number()

const createAlertSchema = Joi.object({
  client: client.required(),
  source: source.required(),
  date: date.required(),
  alertHour: alertHour.required(),
  reportHour: reportHour.required(),
  contact: contact,
  contactEmail: contactEmail,
  monitorName: monitorName.required(),
  ticketOpened: ticketOpened,
  description: description.required(),
  actions: actions.required(),
  extraComments: extraComments
})

const updateAlertSchema = Joi.object({
  _id: _id,
  client: client,
  source: source,
  date: date,
  alertHour: alertHour,
  reportHour: reportHour,
  contact: contact,
  contactEmail: contactEmail,
  monitorName: monitorName,
  ticketOpened: ticketOpened,
  description: description,
  actions: actions,
  extraComments: extraComments,
  __v: __v
})

module.exports = { createAlertSchema, updateAlertSchema }
