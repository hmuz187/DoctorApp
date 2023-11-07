'use strict'

const express = require('express')
const AccessController = require('../controllers/access.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const router = express.Router()


router.get('/login', asyncHandler(AccessController.getLogin))
router.post('/processlogin', asyncHandler(AccessController.postLogin))
router.get('/home', asyncHandler(AccessController.getDashboard))



module.exports = router







// router.get('/home', (req, res) => {
//     res.render('home', {layout: 'blank'})
// })
