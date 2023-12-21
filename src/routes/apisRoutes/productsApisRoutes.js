const express = require('express');
const router = express.Router()

const { list, detail,create,update,destroy}= require('../../controllers/apisControllers/apiProductsController');
const upload = require('../../middlewares/upload');



/* /api/products */

router.get('/',list)
router.get ('/:id', detail)
router.post('/',upload.any(),create)
router.put('/:id',update)
router.delete('/:id',destroy)



module.exports = router