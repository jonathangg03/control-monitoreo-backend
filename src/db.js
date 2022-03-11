const mongoose = require('mongoose')
const { dbUri } = require('./config')

module.exports = mongoose.connect(dbUri, (error) => {
  if (error) console.log(error)
})
