const Sequelize = require("sequelize")
const connection =  require("../database/database")

const Category = connection.define('article', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Article