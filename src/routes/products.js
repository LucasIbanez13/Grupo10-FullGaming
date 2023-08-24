const express = require('express');
const {shoppingCart,productDetail,productCreate,productEdit,} = require('../controllers/controllerProducts');
const { remove } = require('../controllers/funciones/remove');

const router = express.Router();

/* /products */
router.get('/shoppingCart', shoppingCart);
router.get('/productDetail/:id/',productDetail)
router.get('/productCreate/:id/',productCreate)
router.get('/productEdit/:id/',productEdit)
router.delete("/remove/:id/",remove);


module.exports = router;