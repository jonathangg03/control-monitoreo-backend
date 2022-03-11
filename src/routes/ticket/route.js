const express = require('express')
const router = express.Router()
const Model = require('./model')

router.get('/:id', async (req, res) => {
  try {
    const ticket = await Model.findById(req.params.id)
    res.json({
      ticket
    })
  } catch (error) {
    console.log(error.message)
    res.send(`No se pudo obtener la alerta`)
  }
})

router.post('/', async (req, res) => {
  const {
    caseNumber,
    client,
    date,
    enterHour,
    firstReplyHour,
    engineer,
    description,
    actions
  } = req

  try {
    const newTicket = new Model({
      caseNumber,
      client,
      date,
      enterHour,
      firstReplyHour,
      engineer,
      description,
      actions
    })
    await newTicket.save()
    res.send('Ticket ingresado con exito')
  } catch (error) {
    console.log(error.message)
    res.send('Error al ingresar el registro')
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

router.put('/:id', (req, res) => {
  try {
    await Model.findOneAndUpdate(
      { _id: req.params.id },
      { _id: req.params.id, ...body }
    )

    res.send('Registro actualizado correctamente')
  } catch (error) {
    console.log(`Error: ${error.message}`)
    res.send('Error al editar')
  }
})

module.exports = router
