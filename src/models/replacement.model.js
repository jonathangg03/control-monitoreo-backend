const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReplacementSchema = new Schema({
  client: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  },
  caseNumber: {
    type: String,
    required: true
  },
  partNumber: {
    type: String,
    required: true
  },
  seriesNumber: {
    type: String,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  partName: {
    type: String,
    required: true
  },
  engineerName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('replacement', ReplacementSchema)
