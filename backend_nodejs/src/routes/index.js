const express = require('express')
const router = express.Router()

router.use('/access', require('./access.route') )
router.use('/blog', require('./blog.route') )


module.exports = router