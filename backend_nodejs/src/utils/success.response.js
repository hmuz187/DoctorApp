const { codeReasonPhrase, codeStatus } = require('./httpResponse')


class SuccessResponse {
    constructor({ message, statusCode = codeStatus.OK, reasonCode = codeReasonPhrase.OK, metadata = {} }) {
        this.message = message ? message : reasonCode
        this.status = statusCode
        this.metadata = metadata
    }

    send(res, headers={}){
        return res.send(this.status).json(this)
    }
}

class OK extends SuccessResponse{
    constructor({message, metadata, options = {}}){
        super({message, metadata})
        this.options = options
    }
}

class CREATED extends SuccessResponse {
    constructor({message, statusCode = codeStatus.CREATED, reasonCode = codeReasonPhrase.CREATED, metadata, options = {}}){
        super({message, statusCode, reasonCode, metadata})
        this.options = options
    }
}

module.exports = {
    SuccessResponse, 
    OK,
    CREATED
}