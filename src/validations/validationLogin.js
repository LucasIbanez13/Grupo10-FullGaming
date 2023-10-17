const {body} =require("express-validator");
const{userRead}= require("../controllers/controllerHome");
const {compareSync} = require('bcryptjs')



const validationsLogin = [

    body("email2").notEmpty() .withMessage("escribe un correo") .bail()
    .isEmail() .withMessage("escribe un correo valido"),
    
    body("pass2").notEmpty()
    .withMessage("ingresa una contrasena").bail()
    .custom((value, {req}) => {
        const user = userRead.find(user => user.email === req.body.email2)

        if(!user || !compareSync(value, user.pass)) {
            return false
        }
        
        return true
    }).withMessage("credenciales invalidas")
]

module.exports = validationsLogin;