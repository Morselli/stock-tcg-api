const Sequelize = require('sequelize')
const sequelize = require('../../database/db')
const Collection = require('./Collection')
const CardGame = require('./CardGame')
const User = require('./User')

class Card extends Sequelize.Model {}

Card.associations = (models) => {
    Card.belongsTo(models.collections, {
        foreignKey: 'collection_id'
    }),
    Card.belongsTo(models.card_games, {
        foreignKey: 'card_game_id'
    }),
    Card.belongsTo(models.users, {
        foreignKey: 'user_id'
    })
}

Card.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    card_numeration: {
        type: Sequelize. STRING,
        allowNull: false
    },
    rarity: {
        type: Sequelize.ENUM([
            'COMMON',
            'UNCOMMON',
            'RARE',
            'DOUBLE RARE',
            'ULTRA RARE',
            'ILLUSTRATION RARE',
            'SPECIAL ILLUSTRATION RARE'
        ]),
        allowNull: false
    },
    condition: {
        type: Sequelize.ENUM([
            'NM',
            'SP',
            'MP',
            'HP',
            'DM'
        ]),
        allowNull: false
    },
    lowest_value_liga: {
        type: Sequelize.INTEGER
    },
    lowest_value_myp: {
        type: Sequelize.INTEGER
    },
    advertised_value: {
        type: Sequelize.INTEGER
    },
    collection_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'collections',
            key: 'id'
        }
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
})

Card.belongsTo(Collection)
Card.belongsTo(CardGame)
Card.belongsTo(User)