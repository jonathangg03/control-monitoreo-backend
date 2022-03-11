const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = new Schema({
  caseNumber: {
    type: Number,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  enterHour: {
    type: String,
    required: true
  },
  firstReplyHour: {
    type: String,
    required: true
  },
  engineer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actions: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ticket', TicketSchema)
