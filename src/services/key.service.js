const Model = require('../models/key.model')

class Key {
  constructor() {}

  async find() {
    const key = await Model.find()
    return key
  }
  async findOne() {}
  async send() {}
  async update() {}
  async delete() {}
}

module.exports = Key
