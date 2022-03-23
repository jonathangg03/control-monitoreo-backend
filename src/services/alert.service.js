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
    const alert = await Model.findOneAndUpdate(
      { _id: id },
      { _id: id, ...data }
    )
    if (!alert) {
      throw boom.notFound('Alert not found')
    }
    return data
  }

  async delete(id) {
    const alert = await Model.findByIdAndDelete(id)
    if (!alert) {
      throw boom.notFound('Alert not found')
    }
    return `${id} deleted`
  }
}

module.exports = Alert
