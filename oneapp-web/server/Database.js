'use strict';
require('dotenv-safe').config({});
const path = require('path');
const URL = require('url');
const oracledb = require('oracledb');
const Logger = require('./utils/Logger.js');
const bookshelfSchema = require('bookshelf-schema');

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
            }
        });

        const bookshelf = require('bookshelf')(knexConnection);
        bookshelf.plugin(bookshelfSchema);


        /*

        try {

            // Create a connection pool (@see https://oracle.github.io/node-oracledb/doc/api.html#-331-oracledbcreatepool)

            await oracledb.createPool({
                user: process.env.ORACLE_USER,
                password: process.env.ORACLE_PASSWORD,
                connectString: process.env.ORACLE_CONNECTION
            });

        } 
        catch (err) {
            Logger.error(err);
        } 
*/

    },

    /**
     * Get a temporary connection from the pool.
     * You must close the connection when done, release it back to the pool
     * @see closeClonnection
     */
    async getConnection(){
        try {
            return await oracledb.getConnection();
        }
        catch(err){
            Logger.error(err);
        }
    },

    /**
     * Close a connection, and release back to the pool
     * @param {Object} con A connection, given by Database.getConnection()
     */
    async closeConnection(con){
        
        if (!con){
            throw new Error('You must pass a valid connection!');
        }

        try {
            await con.close();
        }
        catch(err){
            Logger.error(err);
        }        
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
