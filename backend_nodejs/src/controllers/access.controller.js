'use strict'
const { OK, CREATED } = require('../utils/success.response')
const { } = require('../utils/error.response')
const uploadImage = require('../config/initMulterImage')
const AdminAccessService = require('../services/access.service')

class AdminAccessController {

    login = async (req, res, next) => {
        new OK({
            message: 'success login',
            metadata: await AdminAccessService.login({email:'', password: ''})
        }).send(res)
    }

    createNewPost = async (req, res, next) => {
        new OK({
            message: 'created post',
            metadata: await AdminAccessService.createNewPost(req.body)
        }).send(res)
    }


    addPost = async (req, res, next) => {
        new OK({
            message: 'successfull upload',
            metadata: {}
        }).send(res)
    }

    addPicture = (uploadImage.single('picturePro'), async (req, res, next) => {
        const url = req.protocol + '://' + req.get('host')
        // console.log(req.file.path)
        // console.log(url + '/public/' + req.file.filename)
        const fileUrl = url + '/public/' + req.file.filename
        new OK({
            message: 'successfull upload',
            metadata: {url: fileUrl}
        }).send(res)
    })

}

module.exports = new AdminAccessController()