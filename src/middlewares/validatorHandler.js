//beside the mongoose validation data, add this middleware to validate in API and avoid errors
const boom = require('@hapi/boom')

const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data)
    if (error) {
      console.log(error)
      next(boom.badRequest(error))
    }

    next()
  }
}

module.exports = validatorHandler
