const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = User
const COLLECTION_NAME = Users

const UserModel = new Schema({
    name: { type: String, maxLength: 255 },
    email: { type: String, required: true, maxLength: 255 },
    password: { type: String, required: true, maxLength: 255 },

    passwordVerifyToken: {type: String},
    passwordResetExpired: {type: Date, default: Date.now()},

    roles: { type: String, enum: ['c1', 'c2', 'c3'], default: 'c1' }, //c3: admin, c2: writer, c3: user
    status: {type: String, enum: ['active', 'inactive'], default: 'active'},
    
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, UserModel)