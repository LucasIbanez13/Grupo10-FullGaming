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
              }),
              db.Stock.findAll({
                order: ['available', 'amount'],
              }),
            ])
              .then(([categories, marca, stock]) => {
                console.log(stock)
                res.render('productCreate', {
                  categories,
                  marca,
                  stock,
                });
              })
              .catch(error => console.log(error));
          }
}
