import axios from 'axios';

export default class User {
    constructor() {
        this.rootUrl = process.env.VUE_APP_API_ROOT_URL ? process.env.VUE_APP_API_ROOT_URL : 'http://localhost:4000';

        console.log('Host: ' + window.location.host);
        console.log('RootURL: ' + this.rootUrl);
    }

    async _send(query) {
        const payload = query;
        console.log('SENDING: ', payload);

        try {
            let info = await axios.post(`${this.rootUrl}/graphql/query`, { query: payload, timeout: 1000 });
            return this._handleResponse(info);
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    _handleResponse(resp) {
        console.log('RESPONE = ', resp);
        if (resp && resp.data) {
            let errors = resp.data.errors;
            let data = resp.data.data;
            if (errors) {
                throw errors[0];
            }
            return data;
        }
        return null;
    }

    async load() {
        //const template = `query {users {current {USER_ID}}}`;
        return await this._send(`query {users {current {USER_ID}}}`, null);
    }

    async update() {
        alert('TBD');
    }

    async register(opts) {
        const qry = `mutation {
                userRegister( input: {
                    USER_ID: "${opts.username}", 
                    PASSWORD: "${opts.password}"
                    HINT_QUESTION: "${opts.hintQuestion}", ,
                    HINT_ANSWER: "${opts.hintAnswer}", ,
                    EMAIL_ADDRESS: "${opts.email}",                     
                } ){token}
            }`;

        return await this._send(qry);
    }

    async login(opts) {
        const qry = `mutation {
                userAuthenticate( input: {USER_ID: "${opts.username}", PASSWORD: "${opts.password}"} )
                {
                    token
                }
            }`;

        let resp = await this._send(qry);

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
