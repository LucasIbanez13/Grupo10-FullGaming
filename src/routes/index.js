var express = require('express');
const {home, search} = require('../controllers/controllerHome');
var router = express.Router();

/* / */
router.get('/', home);
router.get("/search", search)

module.exports = router;
 