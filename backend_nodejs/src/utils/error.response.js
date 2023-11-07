'use strict'

const { codeReason, codeStatus } = require('./httpResponse')

class ErrorResponse extends Error {
    constructor({ message, status }) {
        super(message)
        this.status = status
    }
}

class BadRequestResponse extends ErrorResponse {
    constructor({ message = codeReason.BAD_REQUEST, status = codeStatus.BAD_REQUEST }) {
        super({ message, status })
    }
}

class AuthFailureResponse extends ErrorResponse {
    constructor({ message = codeReason.UNAUTHORIZED, status = codeStatus.UNAUTHORIZED }) {
        super({ message, status })
    }
}

class NotFoundResponse extends ErrorResponse {
    constructor({ message = codeReason.NOT_FOUND, status = codeStatus.NOT_FOUND }) {
        super({ message, status })
    }
}


module.exports = {
    ErrorResponse,
    BadRequestResponse,
    AuthFailureResponse,
    NotFoundResponse
}