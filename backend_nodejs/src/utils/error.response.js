const {codeStatus, codeReasonPhrase} = require('./httpResponse')


class ErrorResponse extends Error {
    constructor({message, statusCode}){
        super(message)
        this.status = statusCode
    }
}

class BadRequestResponse extends ErrorResponse {
    constructor({message = codeReasonPhrase.BAD_REQUEST, statusCode = codeStatus.BAD_REQUEST}){
        super({message, statusCode})
    }
}

class AuthFailureError extends ErrorResponse {
    constructor({message = codeReasonPhrase.UNAUTHORIZED, statusCode = codeStatus.UNAUTHORIZED}){
        super({message, statusCode})
    }
}

class NotFoundError extends ErrorResponse {
    constructor({message = codeReasonPhrase.NOT_FOUND, statusCode = codeStatus.NOT_FOUND}){
        super({message, statusCode})
    }
}

module.exports = {
    ErrorResponse,
    BadRequestResponse,
    AuthFailureError,
    NotFoundError
}