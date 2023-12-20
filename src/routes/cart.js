var express = require('express');
const { showAll, addItem, removeItem, emptyCart, removeAllItem, viewCart } = require('../controllers/funcionesUser/apiCartController')
var router = express.Router();

/* /cart */
router.get('/', showAll);
router.post('/', addItem)
router.delete('/', removeItem)
router.delete('/item-all', removeAllItem);
router.delete('/all', emptyCart)

module.exports = router;
