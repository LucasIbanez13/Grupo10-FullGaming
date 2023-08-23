const products = require("../data/items.json")
module.exports = {
    remove : (req,res) => {
        return res.render('productEdit')
    }
}