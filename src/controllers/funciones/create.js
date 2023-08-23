const products = require("../data/items.json")

module.exports = {
    create : (req,res) => {
        return res.render('create')
    }
}
