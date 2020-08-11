/**
 * this is an error that can be thrown and results in a failure message back 
 * to the api (user error), but not treated internally as an error
 */
class ParamError extends Error {
    
    constructor(...args) {
        super(...args)
        this.code = ParamError.code
        Error.captureStackTrace(this, ParamError)
    }
}

ParamError.code = 403;

module.exports = ParamError