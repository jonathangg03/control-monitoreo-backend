const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlertSchema = new Schema({
  client: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  alertHour: {
    type: String,
    required: true
  },
  reportHour: {
    type: String,
    required: true
  },
  contact: String,
  monitorName: {
    type: String,
    required: true
  },
  ticketOpened: Number,
  description: {
    type: String,
    required: true
  },
  actions: {
    type: String,
    required: true
  },
  extraComments: String
})

module.exports = mongoose.model('alert', AlertSchema)
