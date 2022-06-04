const Sequelize = require("sequelize")


const connection = new Sequelize('guiapress', 'root', '@Vprdavi20',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
})

module.exports = connection;