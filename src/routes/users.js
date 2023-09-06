var express = require('express');
const {login, register, admin,nose,processregister} = require('../controllers/controllerUser');
var router = express.Router();
const {body} =require("express-validator");

const validations = [
    body("name").notEmpty(). withMessage("escribe un nombre"),
    body("email").notEmpty(). withMessage("escribe un correo valido"),
    body("pass").notEmpty(). withMessage("caracter minimo de 6 digitos"),
    body("passz").notEmpty(). withMessage("caracter minimo de 6 digitos")
]

/* users */

//mostrar login
router.get('/login', login);
//mostrar registro
router.get('/register', register);
//procesar registro
router.post("/register", validations, processregister);
//mostrar admin
router.get('/admin', admin);
//no se xd
router.get('/nose', nose);


module.exports = router;
