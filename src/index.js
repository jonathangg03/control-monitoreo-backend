const express = require('express')
const cors = require('cors')
const config = require('./config')
const alert = require('./routes/alert/route')
const app = express()

app.use(cors())
app.use(express.json({}))

app.set('port', config.port)

app.use('/alert', alert)

app.listen(app.get('port'), () => {
  console.log(`Listen on http://localhost:${app.get('port')}`)
})
