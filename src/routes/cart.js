var express = require('express');
const { showAll, addItem, removeItem, emptyCart } = require('../controllers/funcionesUser/apiCartController')
var router = express.Router();

/* /cart */

router.get('/', showAll);
router.post('/', addItem)
router.delete('/:id', removeItem);
router.delete('/all', emptyCart)

module.exports = router;
