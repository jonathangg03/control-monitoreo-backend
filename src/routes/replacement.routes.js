const express = require('express')
const validatorHandler = require('../middlewares/validatorHandler')
const {
  createReplacementSchema,
  updateReplacementSchema
} = require('../schemas/replacement.schema')
const router = express.Router()
const ReplacementService = require('../services/replacement.service')
const service = new ReplacementService()

router.get('/', async (req, res) => {
  try {
    const replacement = await service.find()
    res.json(replacement)
  } catch (error) {
    res.send(error.message)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const replacements = await service.findOne(id)
    res.json(replacements)
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  validatorHandler(createReplacementSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const replacement = await service.create(body)
      res.json(replacement)
    } catch (error) {
      next(error)
    }
  }
)

router.put(
  '/:id',
  validatorHandler(updateReplacementSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body, params } = req
      const { id } = params
      const replacement = await service.update(id, body)
      res.send(replacement)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const replacement = await service.delete(id)
    res.send(replacement)
  } catch (error) {
    next(error)
  }
})

module.exports = router
