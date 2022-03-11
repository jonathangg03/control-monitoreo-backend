const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'jona03g97@gmail.com', // generated ethereal user
    pass: 'seperezinbhwlqra' // generated ethereal password
  }
})

transporter.verify().then(() => {
  console.log('Ready to send email')
})

router.post('/', async (req, res) => {
  let info = await transporter.sendMail({
    from: '"Control monitoreo" <jona03g97@gmail.com>', // sender address
    to: 'megabyte9703@gmail.com', // list of receivers
    subject: 'Prueba de envio de correo ✔', // Subject line
    html: '<b>Hola, esto llegó correctamente</b>' // html body
  })
})

module.exports = router

//App: control-monitoreo
//Pass: seperezinbhwlqra
