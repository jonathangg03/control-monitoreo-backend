const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KeySchema = new Schema({
  user: {
    type: String,
    required: true
  },
  keyName: {
    type: String,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  retirement: {
    type: String,
    required: true
  },
  delivery: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('key', KeySchema)
