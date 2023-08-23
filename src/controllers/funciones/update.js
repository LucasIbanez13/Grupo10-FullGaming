const products = require("../data/items.json")
module.exports = {
    update : (req,res) => {
        return res.render('productEdit')
    }
}