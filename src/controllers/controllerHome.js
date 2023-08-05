const products = require("../data/items.json")

module.exports = {
    home : (req,res) => {
        return res.render('home',{
            products
        })
    }
}