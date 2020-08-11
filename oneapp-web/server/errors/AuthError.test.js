
"use strict";

const AuthError = require('./AuthError')

describe('Comm:Errors:AuthError', () => {

    test('AuthError()', (done) => {

        let msg = 'This is a custom user error'
        
        try {
            throw new AuthError(msg)
        }
        catch(err){
            expect(err.toString()).toEqual('Error: ' + msg)
            done()
        }

    });

    test('AuthError().code', (done) => {

        let msg = 'This is a custom user error'
        
        try {
            throw new AuthError(msg)
        }
        catch(err){
            expect(err.code).toEqual(AuthError.code)
            done()
        }

    });

})
