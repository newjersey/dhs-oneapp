import axios from 'axios';

class Base {

    constructor() {

        Base.rootUrl = process.env.VUE_APP_API_ROOT_URL ? process.env.VUE_APP_API_ROOT_URL : 'http://localhost:4000';

        console.log('Host: ' + window.location.host);
        console.log('RootURL: ' + Base.rootUrl);
    }

    static async _send(query) {
        const payload = query;
        console.log('SENDING: ', payload);

        try {
            let info = await axios.post(`${Base.rootUrl}/graphql/query`, { query: payload, timeout: 1000 });
            return this._handleResponse(info);
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    static _handleResponse(resp) {
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

}

export default Base;