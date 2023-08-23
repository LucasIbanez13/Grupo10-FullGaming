const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/items.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    productDetail : (req,res) => {
        const id = req.params.id
        const product = products.find(product => product.id === +id)
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
