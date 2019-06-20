const Sequelize = require('sequelize')
const sqlCon = require('../connection')
const Transaction = require('./transaction')

const Jurnal = sqlCon.define('jurnal', {
    name: Sequelize.STRING
})

Jurnal.sync({ force: true })

module.exports = Jurnal