const express = require("express")
const router = express.Router()

router.get("/categorias", (req, res)=> {
    res.send("Categorias")
})

router.get("/admin/categorias/new",(req, res) => {
    res.send("Criar categoria")
})


module.exports = router;