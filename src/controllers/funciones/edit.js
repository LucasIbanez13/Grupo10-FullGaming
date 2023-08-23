const products = require("../data/items.json")
module.exports = {
    edit : (req,res) => {
        return res.render('edit')
    }
}