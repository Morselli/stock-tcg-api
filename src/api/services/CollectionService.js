const Collection = require('../models/Collection')

module.exports = {

    async create({ userId, name, cardsNumber, cardGameId }) {
        if(!userId) {
            throw new Error('Sem permissão para criar uma coleção')
        }

        if(!name) {
            throw new Error('O nome é obrigatório para criar uma coleção')
        }

        const collection = await Collection.create({
            name,
            cards_number: cardsNumber,
            card_game_id: cardGameId,
            user_id: userId
        })

        return collection
    },

    async findById({ userId, cardGameId, id }) {
        const collection = await Collection.findOne({
            where: {
                id,
                user_id: userId,
                card_game_id: cardGameId
            }
        })

        if(!collection) {
            throw new Error('Coleção não encontrada')
        }

        return collection
    }

}