const CardService = require('../services/CardService')

module.exports = {

  async create(req, res) {
    const { userId } = req.params
    const {
      name,
      cardNumeration,
      rarity,
      condition,
      lowestValueLiga,
      lowestValueMyp,
      advertisedValue,
      collectionId,
      cardGameId
    } = req.body

    try {
      const card = await CardService.create({
        name,
        cardNumeration,
        rarity,
        condition,
        lowestValueLiga,
        lowestValueMyp,
        advertisedValue,
        collectionId,
        cardGameId,
        userId
      })

      return res.json({
        id: card.id,
        name: card.name,
        cardNumeration: card.card_numeration,
        rarity: card.rarity,
        condition: card.condition,
        lowestValueLiga: card.lowest_value_liga,
        lowestValueMyp: card.lowest_value_myp,
        collectionId: card.collection_id,
        cardGameId: card.card_game_id,
        userId: card.user_id
      })
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async findAll(req, res) {
    try {
      const cards = await CardService.findAll()

      return res.json(cards)
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async removeById(req, res) {
    const { userId, id } = req.params

    try {
      const card = await CardService.removeById({ id, userId })

      return res.json(card)
    } catch (err) {
      return res.json({ error: err.message })
    }
  }

}