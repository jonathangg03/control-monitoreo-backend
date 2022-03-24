const express = require('express')
const validatorHandler = require('../middlewares/validatorHandler')
const { createKeySchema, updateKeySchema } = require('../schemas/key.schema')
const router = express.Router()
const KeyService = require('../services/key.service')
const service = new KeyService()

router.get('/', async (req, res) => {
  try {
    const keys = await service.find()
    res.json(keys)
  } catch (error) {
    res.send(error.message)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const key = await service.findOne(id)
    res.json(key)
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  validatorHandler(createKeySchema, 'body'),
  async (req, res) => {
    try {
      const { body } = req
      const newKey = await service.create(body)
      res.json(newKey)
    } catch (error) {
      console.log(error.message)
      res.send(error.message)
    }
  }
)

router.put(
  '/:id',
  validatorHandler(updateKeySchema, 'body'),
  async (req, res, next) => {
    try {
      const { body, params } = req
      const { id } = params
      const key = await service.update(id, body)
      res.send(key)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const key = await service.delete(id)
    res.send(key)
  } catch (error) {
    next(error)
  }
})

module.exports = router
