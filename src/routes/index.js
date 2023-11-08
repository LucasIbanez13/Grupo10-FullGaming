var express = require('express');
const {home, search, razer} = require('../controllers/controllerHome');
var router = express.Router();

/* / */
router.get('/', home);
router.get("/search", search)
router.get("/brandRazer", razer)

module.exports = router;
 