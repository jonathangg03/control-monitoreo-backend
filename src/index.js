const express = require('express')
const cors = require('cors')
const { port } = require('./config')
const router = require('./routes/index')
const connectDB = require('./db')
const boomErrorHandler = require('./middlewares/errorHandler')
const app = express()

connectDB()
app.use(cors())
app.use(express.json())

router(app)

app.use(boomErrorHandler)

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`)
})
