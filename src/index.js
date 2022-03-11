const express = require('express')
const cors = require('cors')
const config = require('./config')
const alert = require('./routes/alert/route')
const key = require('./routes/key/route')
const connectDB = require('./db')
const app = express()

connectDB()
app.use(cors())
app.use(express.json())

app.set('port', config.port)

app.use('/alert', alert)
app.use('/key', key)

app.listen(app.get('port'), () => {
  console.log(`Listen on http://localhost:${app.get('port')}`)
})
