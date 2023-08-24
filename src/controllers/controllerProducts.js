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
    shoppingCart : (req,res) => {
        return res.render('shoppingCart')
    },
    productCreate : (req,res) => {
        return res.render('productCreate')
    },
    productUpdate : (req,res) => {
        const { category, marca, estado, garantia, cuotas, cantidades, cards, envio, name, price, description, others } = req.body;
        const product = {
            id: uuidv4(),
            category: category.trim(),
            marca: marca,
            estado: estado,
            garantia: garantia,
            cuotas: cuotas,
            cantidades: +cantidades,
            cards: cards,
            envio: envio,
            name: name.trim(),
            image: null,
            description: description,
            others: others,
            price: +price,
        };
        products.push(product)
		fs.writeFileSync(path.join(__dirname, '../data/items.json'),JSON.stringify(products,null,2))
		return res.redirect('/products')
    },
    productEdit : (req,res) => {
        return res.render('productEdit')
    }
}
