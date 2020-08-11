/**
 * this is an error that can be thrown and results in a failure message back 
 * to the api (user error), but not treated internally as an error
 */
class TierError extends Error {
    
    constructor(...args) {
        super(...args)
        this.code = TierError.code
        Error.captureStackTrace(this, TierError)
    }
}

TierError.code = 403;

module.exports = TierError