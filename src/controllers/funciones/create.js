const fs = require("fs")
const {products,userRead}= require("../controllerHome")
const db = require('../../database/models')

module.exports = {
    create : (req,res) => {
        Promise.all([
            db.Category.findAll({
                order: ['name'], 
              }),
              db.Brand.findAll({
                order: ['name'],
              })
            ])
              .then(([categories, marca]) => {
                res.render('productCreate', {
                  categories,
                  marca,
                });
              })
              .catch(error => console.log(error));
          }
}
