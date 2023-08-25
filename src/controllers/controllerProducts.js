const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Product = require('../data/Products');
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
    productList: (req, res) => {
        const { category } = req.params
        const productsFilter = products.filter(p => p.category === category)
        res.render('productList', {
            products: productsFilter,
            category
        })
    },
    shoppingCart : (req,res) => {
        return res.render('shoppingCart')
    },
    productCreate : (req,res) => {
        return res.render('productCreate')
    },
    productUpdate : (req,res) => {
        const data = {
            ...req.body,
            image : req.file ? req.file.filename : null
          }
        let newProduct = new Product(data);
        products.push(newProduct);
		fs.writeFileSync(path.join(__dirname, '../data/items.json'),JSON.stringify(products,null,2))
		return res.redirect('/users/admin')
    },
    upload : (req,res) => {
        return res.render('subido')
    },
    productEdit : (req,res) => {
        return res.render('productEdit')
    }
}
