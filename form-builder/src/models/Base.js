import axios from 'axios';

class Base {

    constructor() {
        // Pull the instance member service value from the static member
        this.service = this.constructor.service;
    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    static async _send(verb, cmd, data) {

        console.log(`SENDING = ${Base.rootUrl}/${cmd}`);

        try {

            let info = await axios({
                method: verb,
                url: `${Base.rootUrl}/${cmd}`,
                timeout: 1000,
                data: data
            });
            
            return this._handleResponse(info);
        } 
        catch (err) {
            console.error(err);
            throw new Error(err);
        }
    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    static _handleResponse(resp) {

        console.log('RESPONE = ', resp);

        if (resp && resp.data) {
            return resp.data;
        }

        return null;
    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    async load(id){

        const data = await Base._send('get', `${this.service}/${id}`);

        // Assign data to this 
        for (let key in data){
            this[key] = data[key];
        }

    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    async save(){
        
        let data = null;

        if (this._id){
            data = await Base._send('put', `${this.service}/${this._id}`, this);
        }
        else {
            data = await Base._send('post', this.service, this);
        }

        // Assign data to this 
        for (let key in data){
            this[key] = data[key];
        }

    }    

    // ///////////////////////////////////////////////////////////////////////////////////////

    async delete(){
        if (this._id){
            await Base._send('delete', `${this.service}/${this._id}`);
        }
    } 

    // ///////////////////////////////////////////////////////////////////////////////////////

    static async getAll() {
        
        let items = [];
        const data = await Base._send('get', `${this.service}s`);

        for (let i=0; i<data.length; i+=1){
            
            console.log(data[i])
            let tmp = new this();
        
            // Assign data to this 
            for (let key in data[i]){
                tmp[key] = data[i][key];
            }

            items.push(tmp)
        }

        return items;
    }    

}

Base.rootUrl = process.env.VUE_APP_API_ROOT_URL ? process.env.VUE_APP_API_ROOT_URL : 'http://localhost:5341';

export default Base;