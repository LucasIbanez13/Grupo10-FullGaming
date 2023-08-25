const express = require('express');
const upload = require('../middlewares/upload');
const {shoppingCart,productDetail,productCreate,productEdit,productUpdate,productList} = require('../controllers/controllerProducts');
const { remove } = require('../controllers/funciones/remove');

const router = express.Router();

/* /products */
router.get('/shoppingCart', shoppingCart);
router.get('/productDetail/:id/',productDetail)
router.get('/productCreate',productCreate)
router.post('/productCreate',upload.single('image'),productUpdate)
router.get('/productList/:category?',productList)
router.get('/productEdit/:id/',productEdit)
router.delete("/remove/:id/",remove);


module.exports = router;