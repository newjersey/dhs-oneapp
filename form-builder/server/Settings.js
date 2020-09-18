'use strict';
require('dotenv-safe').config({});

const Logger = require('./utils/Logger.js');

var Settings = {

    db: null,

    init() {

        if (process.env.LOG_LEVEL) {
            Logger.setLevel(process.env.LOG_LEVEL);
        }

        // If we don't have a mongo url, then it's not needed
        if (!process.env.MONGO_URI) {
            Logger.info('Service is not using Mongo');
            return;
        }

        const mongoose = require('mongoose');
        mongoose.set('useCreateIndex', true);
        
        Logger.info('Connecting to Mongo...');

        // Connect to mongo
        mongoose.connection.on('open', function() {
            let host = process.env.MONGO_URI.split('@');
            Logger.debug('Connected to MongoDB, host = ' + host[1]);
        });

        var options = {
            useUnifiedTopology: true,
            useNewUrlParser: true         
        };

        // Turn off auto-index in production, see https://mongoosejs.com/docs/guide.html#autoIndex
        if (process.env.NODE_ENV == 'production'){
            options.autoIndex = false;
        }

        // We have to configure mongo to use ssl, but only if the mongo url is using ssl!
        if (process.env.MONGO_URI.search('ssl=true') !== -1) {
            options.mongos = {
                ssl: true,
                sslValidate: false
            };
        }
        
        Settings.db = mongoose.connect(process.env.MONGO_URI, options, function(err) {
            if (err) {
                Logger.fatal('Error connecting to Mongo! Is Mongo running?');
                throw err;
            }
        });
    }
};

Settings.init();

module.exports = Settings;
