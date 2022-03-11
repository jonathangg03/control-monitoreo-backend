const mongoose = require('mongoose')
const { dbUri } = require('./config')

module.exports = async () => {
  try {
    await mongoose.connect(dbUri)
    console.log('DB Connected')
  } catch (error) {
    console.log('Error to connect db: ', error.message)
  }
}
