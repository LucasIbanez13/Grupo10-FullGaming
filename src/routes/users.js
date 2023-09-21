var express = require('express');
const {login, register, admin,nose,processregister,processLogin,profile,logout} = require('../controllers/controllerUser');
var router = express.Router();
const {body} =require("express-validator");
const{userRead}= require("../controllers/controllerHome");
const validationsLogin = require("../validations/validationLogin");
const {profileUpdate} = require('../controllers/funcionesUser/profileUpdate')
const upload = require('../middlewares/upload');
const { isAuthenticated } = require('../middlewares/verify/verifyAuthenticated');
const isAdmin = require('../middlewares/verify/verifyAdmin');




const validations = [
    body("name").notEmpty(). withMessage("escribe un usuario"),
    body("email").notEmpty() .withMessage("escribe un correo") .bail()
    .isEmail() .withMessage("escribe un correo valido").bail()
    .custom((value) => {
        const users = userRead
        const user = users.find(user => user.email === value);

        if (user) {
            return false
        }
        return true
    }).withMessage("email ya registrado"),
    body("pass").isLength({
        min:6
    }). withMessage("minimo de 6 caracteres"),
    body("passz")
    .custom((value, {req}) =>{
        if (value !== req.body.pass) {
            return false
        }
        return true
    }). withMessage("contrasenas no coinciden")
]

/* users */

//mostrar login
router.get('/partials/login', login);

//procesar login
router.post("/login",validationsLogin, processLogin);

//mostrar registro
router.get('partials/register', register);

//procesar registro
router.post("/register", validations, processregister);

//mostrar admin
router.get('/admin',isAdmin ,admin);

//no se xd
router.get('/nose', nose);

//profile
router.get('/profile/:id',isAuthenticated ,profile);
router.post('/profile/:id',upload.single('image'), profileUpdate);
//cerrar session
router.get('/logout',logout);

module.exports = router;

