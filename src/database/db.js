const Sequelize = require('sequelize')
const sequelize = new Sequelize('stocktcg', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize

