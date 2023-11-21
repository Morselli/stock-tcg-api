const Card = require('../models/Card')

module.exports = {

  async create({
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
  }) {
    if (!name || !cardNumeration || !rarity || !condition) {
      throw new Error('Dados obrigatórios faltando')
    }

    let advertisedValueInCents = 0

    if (advertisedValue) {
      advertisedValueInCents = valueToCents(advertisedValue)
    }

    function valueToCents(value) {
      const valueInCents = value * 100

      return valueInCents
    }

    const card = await Card.create({
      name,
      card_numeration: cardNumeration,
      rarity,
      condition,
      lowest_value_liga: lowestValueLiga,
      lowest_value_myp: lowestValueMyp,
      advertised_value: advertisedValueInCents,
      collection_id: collectionId,
      card_game_id: cardGameId,
      user_id: userId
    })

    console.log(card)

    return card
  },

  async findAll() {
    const cards = await Card.findAll()

    if(!cards) throw new Error('Nenhum card encontrado')

    return cards
  },

  async removeById({ id, userId }) {
    const card = await Card.findOne({
      where: {
        id: id,
        userId: userId
      }
    })

    if(!card) {
      throw new Error('Card not found')
    }

    await card.destroy()
  }

}