const fs = require("fs");
const path = require("path");
const{products}= require("./controllerHome")
const {validationResult} =require("express-validator");

module.exports = {
    register : (req,res) => {
        return res.render('partials/register')
    },
    
    processregister : (req,res) => {
        const  resultValidation = validationResult(req);

        
        if (resultValidation.errors.length > 0 ) {
            return res.render("register", {
                errors: resultValidation.mapped(),
            });
        } else{
            return res.send("hola")
        }
    },
    login : (req,res) => {
        return res.render('login')
    },

    admin : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data", "items.json"), "utf-8"));
        return res.render("admin",{
            products
        })
    },
    nose : (req,res) => {
        return res.render("nose")
    }
    
}