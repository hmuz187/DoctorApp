const express = require('express')
const blogController = require('../controllers/blog.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const authJwt = require('../auth/verifyJWT')
const router = express.Router()

router.use(authJwt.verifyToken())
router.post('/addNewPost', asyncHandler(blogController.addNewPost))


module.exports = router