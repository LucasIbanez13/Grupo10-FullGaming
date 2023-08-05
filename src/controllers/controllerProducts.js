const products = require("../data/items.json")

module.exports = {
    productDetail : (req,res) => {
        const id = req.params.id

        const product = products.find(product => prodcut.id === +id)

        return res.render('productDetail',{
            product
        })
    },
    shoppingCart : (req,res) => {
        return res.render('shoppingCart')
    },
    productCreate : (req,res) => {
        return res.render('productCreate')
    },
    productEdit : (req,res) => {
        return res.render('productEdit')
    }
}
