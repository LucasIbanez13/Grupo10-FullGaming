const fs = require("fs")
const path = require("path")
const Product = require('../../data/Products');
const {products}= require("../controllerHome")

/* Este es parte de creacion de productos esto es la actualizacion */
module.exports = {
    productUpdate : (req,res) => {
        const data = {
            ...req.body,
            image : req.file ? req.file.filename : null
          } 
        let newProduct = new Product(data);
        products.push(newProduct);
		fs.writeFileSync(path.join(__dirname, '../../data/items.json'),JSON.stringify(products,null,2))
		return res.redirect('/users/admin')
    },
}