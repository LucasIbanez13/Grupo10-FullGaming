var express = require('express');
const {home, search, razer, brand} = require('../controllers/controllerHome');
var router = express.Router();

/* / */
router.get('/', home);
router.get("/search", search)
router.get('/products/brand:marca', brand);
router.get("/brandrazer", razer)

module.exports = router;
 