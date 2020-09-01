
import axios from 'axios'

export default class User {

    constructor(){

        this.rootUrl = process.env.VUE_API_ROOT_URL ? process.env.VUE_API_ROOT_URL : 'http://localhost:4000';

        console.log('Host: ' + window.location.host);
        console.log('RootURL: ' + this.rootUrl)
    
        /*
        return axios.create({
            baseURL: rootUrl,
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })


const body = {
  query: `
	mutation ($boardId: Int!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
	  create_item (
	    board_id: $boardId,
	    group_id: $groupId,
	    item_name: $itemName,
	    column_values: $columnValues
	  ) {
	    id
	  }
	}
  `,
  variables: {
  	boardId: 1234567,
	groupId: "topics",
	itemName: "New item name",
	columnsValues: JSON.stringify({ status: { index: 1 } })
  }
}
axios.post(`https://api.monday.com/v2`, body, {
    headers: {
      Authorization: 'API_TOKEN'
    }
  })

        */

    }
    
    async _send(query){

        const payload = query;
        console.log('SENDING: ', payload);

        try {
            let info = await axios.post(`${this.rootUrl}/graphql/query`, {query:payload})
            return this._handleResponse(info);
        }
        catch(err){
            console.error(err);
            return null;
        }  
    }

    /*
    async _send(queryTemplate, data){

        const payload = JSON.stringify({queryTemplate, variables: data})

        console.log('Sending: ', payload);

        try {
            let info = await axios.post(`${this.rootUrl}/graphql/query`, payload)
            console.log(info);
            return this._handleResponse(info);
        }
        catch(err){
            console.error(err);
            return null;
        }  
    }
    */

    _handleResponse(resp){
        console.log('RESPONE = ', resp);
        if (resp && resp.data){
            let errors = resp.data.errors;
            let data = resp.data.data;
            if (errors){
                throw errors[0];
            }
            return data;
        }
        return null;
    }

    async load(){
        //const template = `query {users {current {USER_ID}}}`;
        return await this._send(`query {users {current {USER_ID}}}`, null);     
    }

    async update(){

    }

    async register(opts){
        
        const qry = 
            `mutation {
                userRegister( input: {
                    USER_ID: "${opts.username}", 
                    PASSWORD: "${opts.password}"
                    HINT_QUESTION: "${opts.hintQuestion}", ,
                    HINT_ANSWER: "${opts.hintAnswer}", ,
                    EMAIL_ADDRESS: "${opts.email}",                     
                } ){token}
            }`

        return await this._send(qry);    
    }

    async login(opts){
        
        const qry = 
            `mutation {
                userAuthenticate( input: {USER_ID: "${opts.username}", PASSWORD: "${opts.password}"} )
                {
                    token
                }
            }`

        /*

        mutation {userAuthenticate(input: {USER_ID: "rkh5",PASSWORD: "pwd"}){token}}

        mutation {
            userAuthenticate(input: {USER_ID: "rkh5",PASSWORD: "pwd"})
            {
                token
            }
        }
        */
        
        return await this._send(qry);     
    }

    async checkUsername(username){
        
        /*

query {
  users {userAvailable( USER_ID: "ONEAPP4") }
}
        */

        const qry = `query {
            users {userAvailable(USER_ID: "${username}")}
        }`;

        return await this._send(qry); 

    }
}
