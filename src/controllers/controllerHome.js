const products = require("../data/items.json")
const marcas = require("../data/marcas.json")

module.exports = {
    home : (req,res) => {
        return res.render('home',{
            products,
            marcas
        })
    }
}