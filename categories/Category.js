const Sequelize = require("sequelize")
const connection =  require("../database/database")

const Category = connection.define('categories', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})



module.exports = Category