const app = require("express")
const express = express()

app.get("/", (req, res)=>{
    res.render("index")
})
















app.listen(2020, ()=>{
    console.log("Site Rodando!!!")
})