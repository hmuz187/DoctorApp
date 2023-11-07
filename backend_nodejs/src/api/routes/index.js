const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const AccessController = require('../controllers/access.controller')
const router = express.Router()

router.use('/access', require('./access.route'))
router.use('/blog', require('./blog.route'))


module.exports = router