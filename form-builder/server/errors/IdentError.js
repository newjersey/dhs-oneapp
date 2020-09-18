/**
 * this is an error that can be thrown and results in a failure message back 
 * to the api (user error), but not treated internally as an error
 */
class IdentError extends Error {
    
    constructor(...args) {
        super(...args)
        this.code = IdentError.code
        Error.captureStackTrace(this, IdentError)
    }
}

IdentError.code = 403;

module.exports = IdentError