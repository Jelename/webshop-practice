var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5431/postgres')

module.exports = sequelize