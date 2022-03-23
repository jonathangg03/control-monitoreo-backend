const express = require('express')
const validatorHandler = require('../middlewares/validatorHandler')
const { createTicketSchema } = require('../schemas/ticket.schema')
const router = express.Router()
const TicketService = require('../services/ticket.service')
const service = new TicketService()

router.get('/', async (req, res) => {
  try {
    const tickets = await service.find()
    res.json(tickets)
  } catch (error) {
    console.log(error.message)
    res.send(error.message)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const ticket = await service.findOne(id)
    res.json(ticket)
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  validatorHandler(createTicketSchema, 'body'),
  async (req, res) => {
    try {
      const { body } = req
      const ticket = await service.create(body)
      res.json(ticket)
    } catch (error) {
      console.log(error.message)
      res.send(error.message)
    }
  }
)

router.put('/:id', async (req, res, next) => {
  try {
    const { body, params } = req
    const { id } = params
    const ticket = await service.update(id, body)
    res.send(ticket)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const ticket = await service.delete(id)
    res.send(ticket)
  } catch (error) {
    next(error)
  }
})

module.exports = router
