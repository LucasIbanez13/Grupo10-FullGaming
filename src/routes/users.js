var express = require('express');
const {login, register, admin} = require('../controllers/controllerUser');
var router = express.Router();

/* users */
router.get('/login', login);
router.get('/register', register);
router.get('/admin', admin);


module.exports = router;
