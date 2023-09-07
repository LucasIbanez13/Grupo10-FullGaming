const fs = require("fs");
const path = require("path");
const{products}= require("./controllerHome")
const {validationResult} =require("express-validator");

module.exports = {
    register : (req,res) => {
        return res.render('partials/register')
    },
    
    processregister : (req,res) => {
        const  errors = validationResult(req);
        const {viewError} =req.query
        if (!errors.isEmpty()) {
            req.session.errorsRegister = errors.mapped()
            req.session.old = { ...req.body }
            res.redirect(viewError);
            return
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