const {Schema, model} = require('mongoose')

const DOCUMENT_NAME = 'Post' 
const COLLECTION_NAME = 'Posts' 

const PostModel = new Schema({
    title: {type: String, required: true},
    author: {type: String},//author: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {type: String},
    isDraft: {type: Schema.Types.Boolean, default: true},
    isPublish: {type: Schema.Types.Boolean, default: false},
    category: {type: Schema.Types.ObjectId, ref: 'CategoryPost'},
    tag: {type: Array, default: []},
    img_thumb: {type: String},
    img_detail: {type: Array, default: []},
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, PostModel)