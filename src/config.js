if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  transport: {
    user: process.env.TRANSPORTER_USER,
    password: process.env.TRANSPORTER_PASSWORD
  }
}
