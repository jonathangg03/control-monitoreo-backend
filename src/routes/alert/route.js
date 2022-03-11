const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
const Model = require('./model')

const {
  transport: { user, password }
} = require('../../config')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: user, // generated ethereal user
    pass: password // generated ethereal password
  }
})

transporter.verify().then(() => {
  console.log('Ready to send email')
})

router.get('/', async (req, res) => {
  try {
    const alert = await Model.find()
    res.json(alert)
  } catch (error) {
    console.log(error.message)
    res.send(`No se pudo obtener la alerta`)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const alert = await Model.findById(req.params.id)
    res.json(alert)
  } catch (error) {
    console.log(error.message)
    res.send(`No se pudo obtener la alerta`)
  }
})

router.post('/', async (req, res) => {
  const { body } = req
  const {
    client,
    source,
    date,
    alertHour,
    reportHour,
    contact,
    monitorName,
    ticketOpened,
    description,
    actions,
    extraComments
  } = body

  try {
    const newAlert = new Model({
      client,
      source,
      date,
      alertHour,
      reportHour,
      contact,
      monitorName,
      ticketOpened,
      description,
      actions,
      extraComments
    })

    await newAlert.save()
    const message = `
      <h2>Cliente: </h2><h3>${client}</h3>
      <h2>Equipo: </h2><h3>${source}</h3>
      <h2>Fecha: </h2><h3>${date}</h3>
      <h2>Hora de la alerta: </h2><h3> ${alertHour}</h3>
      <h2>Hora en que se reportó la alerta: </h2><h3> ${reportHour}</h3>
      <h2>Ingeniero a quien se contactó: </h2><h3> ${contact}</h3>
      <h2>Persona que la reportó: </h2><h3> ${monitorName}</h3>
      <h2>Ticket abierto: </h2><h3> ${ticketOpened || 'No se abrió'}</h3>
      <h2>Descripción: </h2><h3> ${description}</h3>
      <h2>Acciones tomadas por monitoreo: </h2><h3> ${actions}</h3>
      <h2>Comentarios extra: </h2><h3> ${extraComments}</h3>
    `
    let info = await transporter.sendMail({
      from: '"Control monitoreo" <jona03g97@gmail.com>', // sender address
      to: 'megabyte9703@gmail.com', // list of receivers
      subject: `${client} -- ${source} -- ${description}`, // Subject line
      html: message // html body
    })

    if (!info.error) {
      res.send('Alerta ingresada con exito')
    } else {
      res.send('Error al ingresar la alerta')
    }
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
