const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Product = require('../data/Products');
const productsFilePath = path.join(__dirname, '../data/items.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models')
const{userRead}= require("./controllerHome");
const category = require('../database/models/category');
const {validationResult} = require('express-validator');



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports = {
    productDetail : (req,res) => {
        db.Product.findByPk(req.params.id)
        .then(function(productos) {
            res.render('productDetail', {
                productos,
                toThousand
            });
        })
        .catch(error => console.log(error));
        
        /*return res.render('productDetail',{
            ...product,
            products,
            toThousand,
            
            
        })*/
    },

productList: (req, res) => {
    Promise.all([
        db.Brand.findAll(),
        db.Category.findByPk (req.params.id, {
        include: [
            "products"
        ]
    }),
        db.Product.findAll({include: ["images"]}),
        db.Image.findAll(),
    ])
    .then(function([marca, category, productos]) {
        res.render('productList', {
            productos,
            marca,
            category,
            toThousand,
        });
    })
    .catch(error => console.log(error)); 
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
    update: async (req, res) => {
         const errors = validationResult(req);

        if (!errors.isEmpty()) { 
            const productUp = req.params.id;

            const [categories, product, brands] = await Promise.all([
                db.Category.findAll({
                    order: ['name']
                }),
                db.Product.findByPk(productUp, {
                    include: ["images", "category", "brand"]
                }),
                db.Brand.findAll({
                    order: ['name']
                })
            ]);

            res.render('productEdit', {
                product,
                brands,
                categories,
                categoryId: product ? product.categoryId : null,
                brandId: product ? product.brandId : null,
                errors: errors.mapped()
            });
            }
        try {      
            const productUp = req.params.id;
            const { category, name, brand, model, description, price, discount } = req.body;

            const product = await db.Product.findByPk(productUp, {
                include: ["images", "category", "brand"]
            });
           
                 if (product) {
                await db.Product.update({
                    category,
                    name: name.trim(),
                    brandId: product.brand,
                    model,
                    description: description.trim(),
                    price,
                    discount
                }, {
                    where: {
                        id: productUp
                    }
                });

                console.log('Producto actualizado con éxito');
              
               return res.redirect('/users/admin'); 
            } else {
                
                throw new Error("Producto no encontrado");
            }
         } catch (error) {
            console.log(error);
            
        }
    },
    
    productEdit: async (req, res) => {
      
        try {
            const product = await db.Product.findByPk(req.params.id, {
                include: ["images"]
            });
            const productos = await db.Product.findAll();
            const brands = await db.Brand.findAll({
                order: ['name']
            });
            const categories = await db.Category.findAll({
                order: ['name']
            });
    
            return res.render('productEdit', {
                product,
                brands,
                categories,
                productos,
                categoryId: product ? product.categoryId : null,
                brandId: product ? product.brandId : null,
                errors: {}
            });
        } catch (error) {
            console.log(error);
        }
    }
        
    } 


    
