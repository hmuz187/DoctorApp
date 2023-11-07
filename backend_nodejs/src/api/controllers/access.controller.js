'use strict'
const jwt = require("jsonwebtoken")
require('dotenv').config()

const { OK } = require('../../utils/success.response')
const { AuthFailureError } = require('../../utils/error.response')


class AccessController {

    getDashboard = async (req, res, next) => {
        res.render('adminDashboard', { layout: 'blank' })
    }


    getLogin = async (req, res, next) => {
        res.render('login', { layout: 'blank' })
    }


    postLogin = async (req, res, next) => {

        const { email, password } = req.body
        if (email === 'reactShop1@gmail.com' && password === 'abc123') {
            const token = jwt.sign({ email: email },
                process.env.TOKEN_SECRET,
                {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: 86400, // 24 hours
                });
            req.session.token = token
            res.redirect('/v1/admin/access/home')
        } else {
            return res.render('login', { layout: 'blank', message: `wrong information, please try again!!!` })
            // return res.redirect('/v1/admin/access/login/', {message: `wrong information, please try again!!!`})
        }
    }


}

module.exports = new AccessController()