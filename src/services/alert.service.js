const boom = require('boom')
const Model = require('../models/alert.model')

class Alert {
  constructor() {}

  async find() {
    const alerts = await Model.find()
    return alerts
  }

  async findOne(id) {
    const alert = await Model.findById(id)
    if (!alert) {
      throw boom.notFound('Alert not found')
    }
    return alert
  }

  async create(data) {
    const newAlert = new Model(data)
    await newAlert.save()
    return newAlert
  }

  async update(id, data) {
    await Model.findOneAndUpdate({ _id: id }, { _id: id, ...data })
    return data
  }

  async delete(id) {
    await Model.findByIdAndDelete(id)
    return `${id} deleted`
  }
}

module.exports = Alert
