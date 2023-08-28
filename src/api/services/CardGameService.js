const CardGame = require('../models/CardGame')

module.exports = {

    async create({ userId, name }) {
        if(!name) {
            throw new Error('O nome do card game é obrigatório')
        }

        const cardGame = await CardGame.create({
            name,
            userId
        })

        return cardGame
    },

    async findById({ userId, id }) {
        const cardGame = await CardGame.findOne({
            where: {
                id: id,
                userId: userId
            }
        })

        if(!cardGame) {
            throw new Error('Card game não encontrado')
        }

        return cardGame
    },

    async updateById({ userId, id, name }) {
        const cardGame = await CardGame.findOne({
            where: {
                id: id,
                userId: userId
            }
        })

        if(!cardGame) {
            throw new Error('Card game não encontrado')
        }

        const updatedCardGame = await cardGame.update(
            {
                name
            },
            {
                where: {
                   id 
                }
            }
        )

        return updatedCardGame
    },

    async removeById({ userId, id }) {
        const cardGame = await CardGame.findOne({
            where: {
                id: id,
                userId: userId
            }
        })

        if(!cardGame) {
            throw new Error('Card game não encontrado')
        }

        await cardGame.destroy()
    },

    async findAllByUser({ userId }) {
        const cardGames = await CardGame.findAll({
            where: {
                userId: userId
            }
        })

        if(!cardGames) {
            throw new Error('Nenhum card game encontrado')
        }

        return cardGames
    },

    async findAll() {
        const cardGames = await CardGame.findAll()

        if(!cardGames) {
            throw new Error('Nenhum card game encontrado')
        }

        return cardGames
    }
}