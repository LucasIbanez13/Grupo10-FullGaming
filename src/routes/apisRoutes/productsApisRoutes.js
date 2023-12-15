const express = require('express');
const router = express.Router()

const { list, detail }= require('../../controllers/apisControllers/apiProductsController')


/* /api/products */

router.get('/',list)
router.get ('/:id', detail)



module.exports = router