'use strict'

const {codeReason, codeStatus} = require('./httpResponse')

class SuccessResponse {
    constructor({message, status = codeStatus.OK, reasonCode = codeReason.OK, metadata = {}}){
        this.message = message? message : reasonCode
        this.status = status
        this.metadata = metadata
    }

    send(res, headers={}){
        return res.status(this.status).json(this)
    }
}

class OK extends SuccessResponse {
    constructor({message, metadata, options = {}}){
        super({message, metadata})
        this.options = options
    }
}


class CREATED extends SuccessResponse {
    constructor({message, status = codeStatus.CREATED, reasonCode = codeReason.CREATED, metadata, options={}}){
        super({message, status, reasonCode, metadata})
        this.options = options
    }
}

module.exports = {
    SuccessResponse,
    OK,
    CREATED
}