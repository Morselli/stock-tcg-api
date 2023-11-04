const Sequelize = require('sequelize')
const sequelize = require('../../database/db')
const User = require('./User')

class CardGame extends Sequelize.Model { }

CardGame.associations = (models) => {
  CardGame.belongsTo(models.users, {
    foreignKey: 'userId'
  }),
    CardGame.hasMany(models.collections, {
      foreignKey: 'card_game_id'
    })
}

CardGame.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.UUID,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, { sequelize, modelName: 'card_game' })

CardGame.belongsTo(User)

sequelize.sync()
module.exports = CardGame