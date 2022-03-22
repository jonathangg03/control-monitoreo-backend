const express = require('express')

const alert = require('./alert.routes')
const ticket = require('./ticket.routes')
const key = require('./key.routes')
const replacement = require('./replacement.routes')

const RouterAPI = (app) => {
  const router = express.Router()
  app.use('/', router)
  router.use('/alert', alert)
  router.use('/ticket', ticket)
  router.use('/key', key)
  router.use('/replacement', replacement)
}

module.exports = RouterAPI
