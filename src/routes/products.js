const express = require('express');
<<<<<<< HEAD
const {shoppingCart,productDetail,productCreate,productEdit,} = require('../controllers/controllerProducts');
const { remove } = require('../controllers/funciones/remove');

=======
const {shoppingCart,productDetail,productCreate,productEdit,productUpdate} = require('../controllers/controllerProducts');
>>>>>>> 0284461e5674ecd45ae3de3e398fb0d2d391a3c9
const router = express.Router();

/* /products */
router.get('/shoppingCart', shoppingCart);
router.get('/productDetail/:id/',productDetail)
<<<<<<< HEAD
router.get('/productCreate/:id/',productCreate)
router.get('/productEdit/:id/',productEdit)
router.delete("/remove/:id/",remove);
=======
router.get('/productCreate',productCreate)
router.post('/productCreate',productUpdate)
router.get('/productEdit/:id?',productEdit)

>>>>>>> 0284461e5674ecd45ae3de3e398fb0d2d391a3c9


module.exports = router;