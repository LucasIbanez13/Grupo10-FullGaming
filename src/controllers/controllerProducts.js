const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Product = require('../data/Products');
const productsFilePath = path.join(__dirname, '../data/items.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const{userRead}= require("./controllerHome")



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports = {
    productDetail : (req,res) => {
        const id = req.params.id
        const product = products.find(product => product.id === id)
        
        return res.render('productDetail',{
            ...product,
            products,
            toThousand,
            
            
        })
    },

    productList: (req, res) => {
        const { category } = req.params
        const productsFilter = products.filter(p => p.category === category)
        
        return res.render('productList', {
            products: productsFilter,
            category
        })
    },

    productMarc: (req, res) => {
        const { marca } = req.params
        const productsFilter = products.filter(p => p.marca === marca)
        
        return res.render('productMarc', {
            products: productsFilter,
            marca : marca
        })
    },
    
    shoppingCart : (req,res) => {
        return res.render('shoppingCart')
    },
     update: (req, res) => {
        const productId = req.params.id;
        products.forEach(product => { 
            if (product.id == productId) {
                product.category = req.body.category,
                product.image = req.file ? req.file.filename : null;
                product.name = req.body.name,
                product.brand = req.body.brand,
                product.model = req.body.model,
                product.stock = req.body.stock,
                product.description = req.body.description,
                product.price = req.body.price,
                product.discount =req.body. discount,
                product.amountDues = req.body.amountDues,
                product.cards = req.body.cards,
                product.shipment = req.body.shipment,
                product.location = req.body.location
            }

        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
        res.redirect('/users/admin');
    },

    productEdit : (req,res) => {
        const productId = req.params.id;
        const product = products.find(product => product.id === productId )
        return res.render('productEdit', {
            product
        } )
    },

    productprueba : (req,res) => {
        return res.render("admin2")
    }
}
