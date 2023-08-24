const fs = require("fs");
const path = require("path");
const{products}= require("./controllerHome")

module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    login : (req,res) => {
        return res.render('login')
    },

    admin : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data", "items.json"), "utf-8"));
        return res.render("admin",{
            products
        })
    }
}