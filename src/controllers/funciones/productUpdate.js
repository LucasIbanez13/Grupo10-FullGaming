const fs = require("fs")
const path = require("path")
const Product = require('../../data/Products');
const {products}= require("../controllerHome");
const { error } = require("console");
const db = require('../../database/models')


/* Este es parte de creacion de productos esto es la actualizacion */
module.exports = {
  productUpdate: (req, res) => {
    const {category, name, brand, model, description, price, discount } = req.body;
    
    db.Product.create({
        image: req.file.filename,
        name: name,
        model: model,
        description: description,
        price: price,
        discount: discount,
        brandId: brand,
        categoryId: category
    })
      .then(() => {
        return res.redirect("/users/admin");
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