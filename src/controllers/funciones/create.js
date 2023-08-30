const fs = require("fs")
const {products}= require("../controllerHome")
module.exports = {
    create : (req,res) => {
        return res.render('productCreate',{
            ...products
        })
    }
}
