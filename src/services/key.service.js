const boom = require('@hapi/boom')
const Model = require('../models/key.model')

class Key {
  async find() {
    const keys = await Model.find()
    return keys
  }

  async findOne(id) {
    const key = await Model.findById(id)
    if (!key) {
      throw boom.notFound('Key not found')
    }
    return key
  }

  async create(data) {
    const newKey = new Model(data)
    await newKey.save()
    return newKey
  }

  async update(id, data) {
    const key = await Model.findOneAndUpdate({ _id: id }, { _id: id, ...data })
    if (!key) {
      throw boom.notFound('Key not found')
    }
    return data
  }

  async delete(id) {
    const key = await Model.findByIdAndDelete(id)
    if (!key) {
      throw boom.notFound('Key not found')
    }
    return { message: `${id} deleted` }
  }
}

module.exports = Key
