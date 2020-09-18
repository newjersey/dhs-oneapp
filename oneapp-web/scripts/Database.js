'use strict';
require('dotenv-safe').config({});
const oracledb = require('oracledb');
const Logger = require('./utils/Logger.js');
const knex = require('knex');

/**
 * A singleton Database class that handles getting connections
 * to the Oracle database.
 * 
 * Uses [Knex](http://knexjs.org/) and [Bookshelf.js](https://bookshelfjs.org/) as the ORM
 * that sits on Knex
 * 
 * [Here](http://zetcode.com/javascript/knex/) is good Knex cheatsheet 
 */
var Database = {

    connection: null,

    async init() {

        if (process.env.LOG_LEVEL) {
            Logger.setLevel(process.env.LOG_LEVEL);
        }
        
        this.connection = knex({
            client: 'oracledb',
            connection: {
                host: process.env.ORACLE_HOST,
                user: process.env.ORACLE_USER,
                //connectString : process.env.ORACLE_CONNECTION,
                password: process.env.ORACLE_PASSWORD,
                database: process.env.ORACLE_DATABASE
            },
            // Connection pool settings
            pool: {
                min: 1,
                max: 20,
            },
            // Used by OracleDB to return string types
            fetchAsString: [
                'number',
                'clob',
            ],
            debug: false        
        });


    }

};

Database.init();

if (require.main === module) {


    setTimeout(async ()=>{

            /*
        let con = await Database.getConnection();

        const result = await con.execute(
            `SELECT *
            FROM HR.COUNTRIES
            WHERE REGION_ID = :id`,
            [2],  // bind value for :id
        );
        Logger.debug(result.rows);

        await Database.closeConnection(con);
                   
*/
    }, 200);

} 
else {
    module.exports = Database;
}
