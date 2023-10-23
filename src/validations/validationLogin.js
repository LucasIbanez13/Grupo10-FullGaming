const {body} =require("express-validator");
const db = require("../database/models")
const {compareSync} = require('bcryptjs')
 


const validationsLogin = [
    body("email2")
        .notEmpty()
        .withMessage("Escribe un correo")
        .bail()
        .isEmail()
        .withMessage("Escribe un correo válido"),
    
    body("pass2")
        .notEmpty()
        .withMessage("Ingresa una contraseña")
        .bail()
        .custom((value, { req }) => {
            return db.User.findOne({
                where: {
                    email: req.body.email2
                }
            })
            .then(user => {
                if (!user || !compareSync(value, user.password)) {
                    return Promise.reject("Credenciales inválidas");
                }
            })
            .catch(error => {
                return Promise.reject("Credenciales inválidas");
            });
        })
        
];


module.exports = validationsLogin;