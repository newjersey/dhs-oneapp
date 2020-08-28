
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
    
    async _send(queryTemplate, data){

        const payload = JSON.stringify({queryTemplate, variables: data})

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
        
        let data = {
            USER_ID: opts.username,
            PASSWORD: opts.password,
            HINT_QUESTION: opts.hintQuestion,
            HINT_ANSWER: opts.hintAnswer,
            EMAIL_ADDRESS: opts.email           
        }
        
        const template = `query UserInput($dice: Int!, $sides: Int) {
            USER_ID: ID!,
            PASSWORD: String!,
            HINT_QUESTION: String!,
            HINT_ANSWER: String!,
            EMAIL_ADDRESS: String! @constraint(format: "email")
        }`;

        //let qry = {
        //    query: `mutate {UserInput {${JSON.stringify(data)}}}}`
        //};

        return await this._send(template, data);    
    }

    async login(opts){
        
        let data = {
            USER_ID: opts.username,
            PASSWORD: opts.password
        }

        const template = 
            `mutation {
                userAuthenticate( input($userId: ID, $password: String!): {USER_ID: $userId,PASSWORD: $password} )
                {
                    token
                }
            }`

        /*
        mutation {
            userAuthenticate(input: {USER_ID: "rkh5",PASSWORD: "pwd"})
            {
                token
            }
        }
        */
        
        return await this._send(template, data);     
    }
}
