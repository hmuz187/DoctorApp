'use strict'

const postModel = require("../models/post.model")
const { BadRequestResponse } = require("../utils/error.response")

class AdminAccessService {
    static login = async ({ email, password }) => {
        return {
            email: 'admin@gmail.com',
            token: 'abcdefgh'
        }
    }

    static createNewPost = async (data) => {
        console.log(data)
        const { isDraft, isPublish, title, content, author} = data

        const newPost = await postModel.create(data)

        if(!newPost) throw new BadRequestResponse(`error create post, pls try again!`)

        return {
            newPost
        }
    }
}

module.exports = AdminAccessService