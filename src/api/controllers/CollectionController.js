const CollectionService = require('../services/CollectionService')

module.exports = {

  async create(req, res) {
    const { userId, cardGameId } = req.params
    const { name, acronym } = req.body

    try {
      const collection = await CollectionService.create({ userId, name, acronym, cardGameId })

      return res.json(collection)
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async findById(req, res) {
    const { userId, cardGameId, id } = req.params

    try {
      const collection = await CollectionService.findById({ userId, cardGameId, id })

      return res.json(collection)
    } catch (err) {
      return res.json({ error: err.message })
    }
  }

}