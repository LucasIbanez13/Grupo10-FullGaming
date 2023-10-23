const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Product = require('../data/Products');
const productsFilePath = path.join(__dirname, '../data/items.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models')
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
        const {category, name, brand, model, description, price,discount} = req.body

        db.Product.findByPk(productId,{
            include :["image","category"]
        })
        .then((product)=>{
            req.files.image &&
            fs.existsSync(`./public/img/${product.image}`) &&
            fs.unlinkSync(`./public/images/${product.image}`);
        })
        db.Product.update({
            category,
            image : req.file,
            name: name.trim(),
            brandId : brand,
            model,                
            description : description.trim(),
            price,
            discount
        },
        {
           where :{
             productId
            },
        }).then(()=>{
            if(req.files.image) {
                product.images.forEach((image)=>{
                    fs.existsSync(`./public/img/${image.file}`) &&
            fs.unlinkSync(`./public/images/${image.file}`);
                });
                db.Image.destroy({
                    where :{
                        productId : productId,
                    }
                }).then(()=>{
                    const images = req.file.images.map((file) =>{
                        return {
                            imagePrimary : file.filename,
                            imageSecondary : file.filename,
                            productId : product.id
                        }
                    })
                });
                db.image.blukCreate(images,{
                    validate:true,
                }).then((response) =>{
                    return res.redirect('/users/admin');
                })
            } else {
                return res.redirect('/users/admin');
            }
            
        })
        .catch((error) =>console.log(error))
       
       
    },

    productEdit : (req,res) => {        
        const product = db.Product.findByPk(req.params.id,{
            include : ["image"]
        });
        console.log(product)
        const brands = db.Brand.findAll({
            order : ['name']
        });
        const categoryes = db.Category.findAll({
            order : ['name']
        })
        Promise.all([product,brands,categoryes])
        .then(([product,brands,categories])=>{
            return res.render('productEdit',{
                ...product,
                brands,
                categories
            })
        })
        .catch(error =>console.log(error))
       
    },

    productprueba : (req,res) => {
        return res.render("admin2")
    }
}
