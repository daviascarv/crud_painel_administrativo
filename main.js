const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Article = require("./article/Article")
const Category = require("./categories/Category")

const categoriesControler = require("./categories/CategoriesController")
const articleController = require("./article/ArticleController")

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection
        .authenticate()
        .then(() => {
            console.log("Conexão com o Banco de Dados feita com sucesso!!")
        }).catch((error)=>{
            console.log(error)
        })



app.get("/", (req, res)=>{
    res.render("index")
})

app.use("/", categoriesControler)
app.use("/", articleController)














app.listen(2020, ()=>{
    console.log("Site Rodando!!!")
})