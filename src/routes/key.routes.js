const express = require('express')
const router = express.Router()
const KeyService = require('../services/key.service')
const service = new KeyService()

router.get('/', async (req, res) => {
  try {
    const keys = await service.find()
    res.json(keys)
  } catch (error) {
    console.log(error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const key = await Model.findById(req.params.id)
    res.json(key)
  } catch (error) {
    console.log(error.message)
    res.send(`No se pudo obtener la alerta`)
  }
})

router.post('/', async (req, res) => {
  const {
    body: { user, keyName, units, date, retirement, delivery }
  } = req

  try {
    const newKey = new Model({
      user,
      keyName,
      units,
      date,
      retirement,
      delivery
    })
    await newKey.save()
    res.send('Registro de llave ingresada con exito')
  } catch (error) {
    console.log(error.message)
    res.send('Error al ingresar la alerta')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id)
    res.send('Registro eliminado')
  } catch (error) {
    console.log(`Error: ${error.message}`)
    res.send('Error al eliminar')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { body, params } = req
    await Model.findOneAndUpdate(
      { _id: params.id },
      { _id: params.id, ...body }
    )

    res.send('Registro actualizado correctamente')
  } catch (error) {
    console.log(`Error: ${error.message}`)
    res.send('Error al editar')
  }
})

module.exports = router
