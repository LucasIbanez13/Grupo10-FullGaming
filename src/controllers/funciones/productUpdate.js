const fs = require("fs")
const path = require("path")
const Product = require('../../data/Products');
const {products}= require("../controllerHome");
const { error } = require("console");
const db = require('../../database/models')


/* Este es parte de creacion de productos esto es la actualizacion */
module.exports = {
  productUpdate: (req, res) => {
    const { productId, category, name, brand, model, description, price, discount } = req.body;
    
    db.Product.findByPk(productId)
      .then((product) => {

        
        product.category = category;
        product.image = req.file;
        product.name = name;
        product.brandId = brand;
        product.model = model;
        product.description = description;
        product.price = price;
        product.discount = discount;
        

        return product.save();
      })
      .then(() => {
        return res.redirect("/admin");
      })
      .catch((error) => {console.log(error);});
      

        /*const data = {
            ...req.body,
            image : req.file ? req.file.filename : null
          } 
        let newProduct = new Product(data);
        products.push(newProduct);
		fs.writeFileSync(path.join(__dirname, '../../data/items.json'),JSON.stringify(products,null,2))
		return res.redirect('/users/admin')*/
    },
}