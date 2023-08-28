const Sequelize = require('sequelize')
const sequelize = require('../../database/db')

class User extends Sequelize.Model {}

User.init({
    id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    username: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: Sequelize.STRING
}, {sequelize, modelName: 'user'})

sequelize.sync()
module.exports = User