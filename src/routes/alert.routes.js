const express = require('express')
const AlertService = require('../services/alert.service')
const service = new AlertService()
const router = express.Router()

const nodemailer = require('nodemailer')
const {
  transport: { user, password }
} = require('../config')

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
    const alerts = await service.find()
    res.json(alerts)
  } catch (error) {
    console.log(error.message)
    res.send(error.message)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const alert = await service.findOne(id)
    res.json(alert)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { body } = req
    const newAlert = await service.create(body)
    const message = `
      <h2>Cliente: </h2><h3>${body.client}</h3>
      <h2>Equipo: </h2><h3>${body.source}</h3>
      <h2>Fecha: </h2><h3>${body.date}</h3>
      <h2>Hora de la alerta: </h2><h3> ${body.alertHour}</h3>
      <h2>Hora en que se reportó la alerta: </h2><h3> ${body.reportHour}</h3>
      <h2>Ingeniero a quien se contactó: </h2><h3> ${body.contact}</h3>
      <h2>Persona que la reportó: </h2><h3> ${body.monitorName}</h3>
      <h2>Ticket abierto: </h2><h3> ${body.ticketOpened || 'No se abrió'}</h3>
      <h2>Descripción: </h2><h3> ${body.description}</h3>
      <h2>Acciones tomadas por monitoreo: </h2><h3> ${body.actions}</h3>
      <h2>Comentarios extra: </h2><h3> ${body.extraComments}</h3>
    `

    let info = await transporter.sendMail({
      from: '"Control monitoreo" <jona03g97@gmail.com>', // sender address
      to: `megabyte9703@gmail.com, ${body.contactEmail || null}`, // list of receivers
      subject: `${body.client} -- ${body.source} -- ${body.description}`, // Subject line
      html: message // html body
    })

    if (!info.error) {
      console.log('Alerta ingresada con exito')
    }
    res.json(newAlert)
  } catch (error) {
    console.log(error.message)
    res.send(error.message)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { body, params } = req
    const { id } = params
    const newAlert = await service.update(id, body)
    res.send(newAlert)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const { id } = params
    const deleteAlert = await service.delete(id)
    res.send(deleteAlert)
  } catch (error) {
    next(error)
  }
})

module.exports = router
