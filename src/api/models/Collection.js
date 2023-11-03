const Sequelize = require('sequelize')
const sequelize = require('../../database/db')
const CardGame = require('./CardGame')
const User = require('./User')

class Collection extends Sequelize.Model {}

Collection.associations = (models) => {
    Collection.belongsTo(models.card_games, {
        foreignKey: 'card_game_id'
    }),
    Collection.belongsTo(models.users, {
        foreignKey: 'user_id'
    })
}

Collection.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    acronym: {
        type: Sequelize.STRING
    },
    card_game_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'card_games',
            key: 'id'
        }
    },
    user_id: {
        type: Sequelize.UUID,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {sequelize, modelName: 'collection'})

Collection.belongsTo(CardGame)
Collection.belongsTo(User)

sequelize.sync()
module.exports = Collection