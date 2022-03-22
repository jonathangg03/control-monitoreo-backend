const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const replacement = await Model.find()
    res.json(replacement)
  } catch (error) {
    console.log(error.message)
    res.send(`No se pudo obtener la alerta`)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const replacement = await Model.findById(req.params.id)
    res.json(replacement)
  } catch (error) {
    console.log(error.message)
    res.send(`No se pudo obtener la alerta`)
  }
})

router.post('/', async (req, res) => {
  try {
    const {
      body: {
        client,
        date,
        hour,
        caseNumber,
        partNumber,
        seriesNumber,
        units,
        partName,
        engineerName,
        description
      }
    } = req
    const newReplacement = new Model({
      client,
      date,
      hour,
      caseNumber,
      partNumber,
      seriesNumber,
      units,
      partName,
      engineerName,
      description
    })
    await newReplacement.save()
    res.send('Registro de equipo ingresada con exito')
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
