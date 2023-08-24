const fs = require("fs")
const path = require("path")
const {products}= require("../controllerHome")

module.exports = {

    remove : (req,res) => {
        const id = req.params.id

        productsmodify = products.filter(product => product.id !== +id);

        const rutadata = path.join(__dirname, "../../data");
        const filepath = path.join(rutadata, "items.json");

        fs.writeFileSync(filepath, JSON.stringify(productsmodify, null, 2))

        res.redirect("/users/admin")
    }
}