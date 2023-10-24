const fs = require("fs")
const {products,userRead}= require("../controllerHome")
const db = require('../../database/models')

module.exports = {
    create : (req,res) => {
        
        db.Category.findAll({
            order : ['name']
        })
            .then(categories => {
                return res.render('productCreate',{
                    categories
                })
            })
        
    }
}
