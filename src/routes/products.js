const express = require('express');
const {shoppingCart,productDetail,productCreate,productEdit} = require('../controllers/controllerProducts');
const router = express.Router();

/* /products */
router.get('/shoppingCart', shoppingCart);
router.get('/productDetail/:id/',productDetail)
router.get('/productCreate/:id/',productCreate)
router.get('/productEdit/:id/',productEdit)



module.exports = router;