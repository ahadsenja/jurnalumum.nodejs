const Sequelize = require('sequelize')
const sqlCon = require('../connection')

const User = sqlCon.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
})

module.exports = User