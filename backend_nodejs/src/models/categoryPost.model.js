const {Schema, model} = require('mongoose')

const DOCUMENT_NAME = CategoryPost 
const COLLECTION_NAME = CategoryPosts 

const CategoryPostModel = new Schema({
    name: {type: String, required:true, maxLength: 255},
    list_post: {type: Array, default: []},
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, CategoryPostModel)