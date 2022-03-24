const Joi = require('joi')

const client = Joi.string()
const source = Joi.string()
const date = Joi.string()
const alertHour = Joi.string()
const reportHour = Joi.string()
const contac = Joi.string()
const contactEmai = Joi.string()
const monitorName = Joi.string()
const ticketOpened = Joi.number()
const description = Joi.string()
const actions = Joi.string()
const extraComments = Joi.string()

const createAlertSchema = Joi.object({
  client: client.required(),
  source: source.required(),
  date: date.required(),
  alertHour: alertHour.required(),
  reportHour: reportHour.required(),
  contac: contac,
  contactEmai: contactEmai,
  monitorName: monitorName.required(),
  ticketOpened: ticketOpened,
  description: description.required(),
  actions: actions.required(),
  extraComments: extraComments
})

const updateAlertSchema = Joi.object({
  client: client,
  source: source,
  date: date,
  alertHour: alertHour,
  reportHour: reportHour,
  contac: contac,
  contactEmai: contactEmai,
  monitorName: monitorName,
  ticketOpened: ticketOpened,
  description: description,
  actions: actions,
  extraComments: extraComments
})

module.exports = { createAlertSchema, updateAlertSchema }
