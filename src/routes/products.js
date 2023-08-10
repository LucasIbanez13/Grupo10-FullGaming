const express = require('express');
const controllerProducts = require('../controllers/controllerProducts');
const router = express.Router();

/* /products */
router.get('/shoppingcart', controllerProducts.shoppingCart);
router.get('/productDetail/:id?',controllerProducts.productDetail)
router.get('/productCreate/:id?',controllerProducts.productCreate)
router.get('/productEdit/:id?',controllerProducts.productEdit)


module.exports = router;