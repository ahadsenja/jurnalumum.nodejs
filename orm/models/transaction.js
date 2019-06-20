const Sequelize = require('sequelize')
const sqlCon = require('../connection')

const Transaction = sqlCon.define('transaction', {
    date: Sequelize.DATE,
    description: Sequelize.STRING,
    debet: Sequelize.INTEGER,
    credit: Sequelize.INTEGER
})

Transaction.sync({ force: true })

module.exports = Transaction