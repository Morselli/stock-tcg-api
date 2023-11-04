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

      return res.json(card)
    } catch (err) {
      return res.json({ error: err.message })
    }

  }

}