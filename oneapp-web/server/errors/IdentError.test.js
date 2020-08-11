
"use strict";

const IdentError = require('./IdentError')

describe('Comm:Errors:IdentError', () => {

    test('IdentError()', (done) => {

        let msg = 'This is a custom user error'
        
        try {
            throw new IdentError(msg)
        }
        catch(err){
            expect(err.toString()).toEqual('Error: ' + msg)
            done()
        }

    });

    test('IdentError().code', (done) => {

        let msg = 'This is a custom user error'
        
        try {
            throw new IdentError(msg)
        }
        catch(err){
            expect(err.code).toEqual(AuthError.code)
            done()
        }

    });

})
