var express = require('express');
const controllerUser = require('../controllers/controllerUser');
var router = express.Router();

/* users */
router.get('/login', controllerUser.login);
router.get('/register', controllerUser.register);


module.exports = router;
