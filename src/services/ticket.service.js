const boom = require('@hapi/boom')
const Model = require('../models/ticket.model')

class Ticket {
  constructor() {}

  async find() {
    const tickets = await Model.find()
    return tickets
  }

  async findOne(id) {
    const ticket = await Model.findById(id)
    if (!ticket) {
      throw boom.notFound('Ticket not found')
    }
    return ticket
  }

  async create(data) {
    const newTicket = new Model(data)
    await newTicket.save()
    return newTicket
  }

  async update(id, data) {
    const ticket = await Model.findOneAndUpdate(
      { _id: id },
      { _id: id, ...data }
    )
    if (!ticket) {
      throw boom.notFound('Ticket not found')
    }
    return data
  }

  async delete(id) {
    const ticket = await Model.findByIdAndDelete(id)
    if (!ticket) {
      throw boom.notFound('Ticket not found')
    }
    return `${id} deleted`
  }
}

module.exports = Ticket
