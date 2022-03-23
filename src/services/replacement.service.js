const boom = require('@hapi/boom')
const Model = require('../models/replacement.model')

class Replacement {
  constructor() {}

  async find() {
    const replacements = await Model.find()
    return replacements
  }

  async findOne(id) {
    const replacement = await Model.findById(id)
    if (!replacement) {
      throw boom.notFound('Replacement not found')
    }
    return replacement
  }

  async create(data) {
    const newReplacement = new Model(data)
    await newReplacement.save()
    return newReplacement
  }

  async update(id, data) {
    const replacement = await Model.findOneAndUpdate(
      { _id: id },
      { _id: id, ...data }
    )
    if (!replacement) {
      throw boom.notFound('Replacement not found')
    }
    return data
  }

  async delete(id) {
    const replacement = await Model.findByIdAndDelete(id)
    if (!replacement) {
      throw boom.notFound('Replacement not found')
    }
    return `${id} deleted`
  }
}

module.exports = Replacement
