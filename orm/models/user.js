const Sequelize = require('sequelize')
const sqlCon = require('../connection')
const Jurnal = require('./jurnal')

const User = sqlCon.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
})

User.sync({ force: true })

module.exports = User