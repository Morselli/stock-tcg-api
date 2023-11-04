const CardGameService = require('../services/CardGameService')

module.exports = {

  async create(req, res) {
    const { userId } = req.params
    const { name } = req.body

    try {
      const cardGame = await CardGameService.create({ userId, name })

      return res.json(cardGame)
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async findAllByUser(req, res) {
    const { userId } = req.params

    try {
      const cardGames = await CardGameService.findAllByUser({ userId })

      return res.json(cardGames)
    } catch (err) {
      res.json({ error: err.message })
    }
  },

  async findById(req, res) {
    const { userId, id } = req.params

    try {
      const cardGame = await CardGameService.findById({ userId, id })

      return res.json(cardGame)
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async updateById(req, res) {
    const { userId, id } = req.params
    const { name } = req.body

    try {
      const cardGame = await CardGameService.updateById({ userId, id, name })

      return res.json(cardGame)
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async removeById(req, res) {
    const { userId, id } = req.params

    try {
      const cardGame = await CardGameService.removeById({ userId, id })

      return res.json(cardGame)
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async findAll(req, res) {
    try {
      const cardGames = await CardGameService.findAll()

      return res.json(cardGames)
    } catch (err) {
      res.json({ error: err.message })
    }
  }
}