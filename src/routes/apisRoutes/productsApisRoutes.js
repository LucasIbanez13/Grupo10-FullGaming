const express = require('express');
const router = express.Router()

const { list }= require('../../controllers/apisControllers/apiProductsController')


/* /api/products */

router.get('/',list)



module.exports = router