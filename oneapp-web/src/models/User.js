import axios from 'axios';
import Base from './Base';

class User extends Base {

    constructor() {
        super();
    }

    async load() {
        //const template = `query {users {current {USER_ID}}}`;
        return await User._send(`query {users {current {USER_ID}}}`, null);
    }

    async update() {
        alert('TBD');
    }

    async register(opts) {
        
        if (!opts){
            return null;
        }

        const qry = `mutation {
                userRegister( input: {
                    USER_ID: "${opts.username}", 
                    PASSWORD: "${opts.password}"
                    HINT_QUESTION: "${opts.hintQuestion}", ,
                    HINT_ANSWER: "${opts.hintAnswer}", ,
                    EMAIL_ADDRESS: "${opts.email}",                     
                } ){token}
            }`;

        return await User._send(qry);
    }

    async login(opts) {

        if (!opts){
            return null;
        }

        const qry = `mutation {
                userAuthenticate( input: {USER_ID: "${opts.username}", PASSWORD: "${opts.password}"} )
                {
                    token
                }
            }`;

        let resp = await User._send(qry);

        if (resp && resp.userAuthenticate && resp.userAuthenticate.token) {
            this.token = resp.userAuthenticate.token;
            return this.token;
        }

        return false;
    }

    static async requestPasswordReset(email) {
        throw new Error(`requestPasswordReset(${email}) not created yet!`);
    }

    static async requestUsername(email) {
        throw new Error(`requestUsername(${email}) not created yet!`);
    }

    static async checkUsername(username) {
        const qry = `query {
            users {userAvailable(USER_ID: "${username}")}
        }`;
        return await this._send(qry);
    }
}

export default User;