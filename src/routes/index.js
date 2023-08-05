var express = require('express');
const controllerHome = require('../controllers/controllerHome');
var router = express.Router();

/* / */
router.get('/', controllerHome.home);

module.exports = router;
