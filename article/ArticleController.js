const express = require("express")
const router = express.Router()
const Category = require("../categories/Category")
const Article = require("./Article")
const slugify = require("slugify")

router.get("/admin/article", (req, res)=> {
    res.render("admin/article/index")
})

router.get("/admin/article/new",(req, res) => {
    Category.findAll().then(categories =>{
        res.render("admin/article/new", {categories: categories})
    })
})

router.post("/article/save", (req, res)=>{
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(()=>{
        res.redirect("/admin/article")
    })
})

module.exports = router;