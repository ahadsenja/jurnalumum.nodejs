const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    // sqlite! now!
    dialect: 'sqlite',
  
    // the storage engine for sqlite
    // - default ':memory:'
    storage: 'migrations/jurnal.sqlite'
  })

  // Uncomment this ONLY WHEN you want to rebuild your database
  sequelize.sync({ force: true }).then(function(err) {
    console.log('The table was successfully created!')
  }, function(err) {
    console.log('An error occurred while creating the table:', err)
  })

module.exports = sequelize


const User = require('./models/user') 
const Jurnal = require('./models/jurnal') 
const Transaction = require('./models/transaction') 

User.hasMany(Jurnal)
Jurnal.hasMany(Transaction)