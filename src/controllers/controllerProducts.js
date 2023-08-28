const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Product = require('../data/Products');
const productsFilePath = path.join(__dirname, '../data/items.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



module.exports = {
    productDetail : (req,res) => {
        const id = req.params.id
        const product = products.find(product => product.id === id)
        return res.render('productDetail',{
            product
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
     update: (req, res) => {
        const productId = req.params.id;
        products.forEach(product => {

            if (product.id == productId) {
                // Actualizar las propiedades del producto
                product.name = req.body.name,
                product.category = req.body.category,
                product.marca = req.body.marca,
                product.estado = req.body.estado,
                product.description = req.body.description,
                product.price = req.body.price,
                product.discount =req.body. discount
        
                // Escribir los productos actualizados en el archivo JSON si es necesario
            }

        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
    
        // Redirigir al usuario después de la actualización
        res.redirect('/users/admin');
    },

    productEdit : (req,res) => {
        const product = products.find(product => product.id === req.params.id )
        return res.render('productEdit', {
            ...product
        } )
    }
}
