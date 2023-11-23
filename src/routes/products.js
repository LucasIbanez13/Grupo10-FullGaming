const express = require('express');
const upload = require('../middlewares/upload');
const {shoppingCart,productDetail,productEdit,productList,productMarc,update} = require('../controllers/controllerProducts');
const { remove } = require('../controllers/funciones/remove');
const { create } = require('../controllers/funciones/create');
const { productUpdate } = require('../controllers/funciones/productUpdate');
const isAdmin = require('../middlewares/verify/verifyAdmin');
const validationsCreate = require('../validations/createValidation');




const updateValidation = require('../validations/updateValidation');
const router = express.Router();

/* /products */
router.get('/shoppingCart', shoppingCart);
router.get('/productDetail/:id/',productDetail)
router.get('/productCreate',isAdmin,create)
router.post('/productCreate',validationsCreate,upload.single('image'),productUpdate)
router.get('/productList/:id',productList)
router.get('/productMarc/:marca',productMarc)
router.get('/productEdit/:id/',isAdmin,productEdit)
router.put('/update/:id',upload.single('image'),updateValidation,update)
router.delete("/remove/:id/",remove);



module.exports = router;