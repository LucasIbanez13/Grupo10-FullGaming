const express = require('express')
const router = express.Router()
const { listUser, userDetail } =require('../../controllers/apisControllers/apiUsersController')



/* /api/users */
router.get('/',listUser)
router.get('/:id',userDetail)






module.exports = router