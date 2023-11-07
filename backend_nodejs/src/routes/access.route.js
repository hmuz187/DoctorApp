const express= require('express')
const uploadImage = require('../config/initMulterImage')
const router = express.Router()
const {asyncHandler} = require('../helpers/asynchandler')
const AdminAccessController = require('../controllers/access.controller')

router.post('/login', asyncHandler(AdminAccessController.login))
router.post('/addpost', asyncHandler(AdminAccessController.addPost))
router.post('/addPicture', asyncHandler(AdminAccessController.addPicture))
router.post('/createNewPost', asyncHandler(AdminAccessController.createNewPost))




module.exports = router