"use strict";

const winston = require('winston')
const chalk = require('chalk')
const stack = require('callsite')
const path = require('path')
const util = require('util');
const os = require("os");
const format = require('winston').format;

const Logger = {

    colors : {
        log : chalk.white,
        trace : chalk.gray,
        debug : chalk.green,
        input : chalk.blue,
        info : chalk.blue,
        warn : chalk.yellow,
        error : chalk.red,
        fatal : chalk.bold.red,
        exception : chalk.bold.white.bgRed,
        time : chalk.gray
    },  

    colorize: true,

    serviceName: '',

    _logger: null,

    noStackTrace: false,

    init(opts){
        
        //Logger.settings = _.defaults(opts, Logger.defaults);

        const myFormat = format.printf(info => {
            return `${info.level} ${info.message}`;
        });

        // Get the service name
        try {
            Logger.serviceName = path.basename(process.argv[1], path.extname(process.argv[1]))
        }
        catch (e){

        }

        let transports = [
            new winston.transports.Console({
                // See https://github.com/winstonjs/logform
                format: format.combine(                                
                    format.timestamp({
                        //format: 'ddd MMM DD h:mm:ss YYYY'
                        format: 'ddd MMM DD h:mm:ss'
                    }),
                    format.colorize(),
                    myFormat
                )                
            }),

        ] 

        Logger._logger = winston.createLogger({
  			transports: transports
        });
          
    },
    
    __getStackTrace(stackObj){

        let trace_str = ''
        let depth = 1
        let startDepth = 9999
        const maxDepth = 6

        if (stackObj){

            stackObj.forEach(function(site){

                if (site){

                    let no = site.getLineNumber()
                    let fname = site.getFileName()
                    fname = (fname) ? path.basename(fname) : fname
                    let funcname = site.getFunctionName() || 'anonymous'

                    if (funcname){
                        funcname = ' ('+funcname + ')' || '';
                    }
                    else {
                        funcname = '';
                    }

                    if (fname == 'Logger.js') {
                        startDepth = depth+1
                    }

                    if (fname == 'middleware.js') {
                        startDepth = depth-3;
                    }                    

                    if (depth == startDepth){
                        trace_str += " {from line " + no + " of " + fname + funcname;
                    }
                    else if (no && depth > startDepth && depth <= startDepth + maxDepth){
                        //trace_str += ", called from line " + no + " of " + fname + funcname;
                        trace_str += ", line " + no + " of " + fname + funcname;
                    }


                }

                depth+=1;

            });
            trace_str += '}';
        }

        if (Logger.colorize){
            return Logger.colors.trace(trace_str)
        }

        return trace_str

    },

    __serialize(args){      

        let msg = ''

        for (let i=0; i<args.length; i++) {

            if (args[i] && typeof args[i] == 'object'){
                // Add support for calling the dataValues method of the redis ORM
                if (typeof args[i].dataValues == 'function'){
                    msg += "\n " + util.inspect(args[i].dataValues(), {colors:Logger.colorize, compact:false, breakLength: 60, depth: 4});
                }
                // If this is a sequelize object, use it's dataValues instead
                else if (typeof args[i].dataValues != 'undefined'){
                    msg += "\n " + util.inspect(args[i].dataValues, {colors:Logger.colorize, compact:false, breakLength: 60, depth: 4});
                }
                else {
                    msg += "\n" + util.inspect(args[i], {colors:Logger.colorize, compact:false, breakLength: 60, depth: 4});
                }
            }
            else {
                msg += args[i];
            }

            msg += " ";
        }

        return msg
    },

	setLevel(lvl) {
		Logger._logger.level = lvl
	},

	log() {        
        
        var str = Logger.__serialize(arguments)

        if (process.env.NODE_ENV != 'production' && !this.noStackTrace){
            str += Logger.__getStackTrace(stack())
        }

        Logger._logger.log.apply(Logger._logger, ['log', str]);    
	},

	debug() {        
        
        var str = Logger.__serialize(arguments)

        if (process.env.NODE_ENV != 'production' && !this.noStackTrace){
            str += Logger.__getStackTrace(stack())
        }

        Logger._logger.log.apply(Logger._logger, ["debug", str]);    
        
	},

	info() {          
        
        var str = Logger.__serialize(arguments)

        if (process.env.NODE_ENV != 'production' && !this.noStackTrace){
            str += Logger.__getStackTrace(stack())
        }

        Logger._logger.log.apply(Logger._logger, ["info", str]);    
  	},

	warn() {

        var str = Logger.__serialize(arguments)

        if (process.env.NODE_ENV != 'production' && !this.noStackTrace){
            str += Logger.__getStackTrace(stack())
        }

        Logger._logger.log.apply(Logger._logger, ["warn", str]);    
	},

	error() {

        let str = Logger.__serialize(arguments)

        if (!this.noStackTrace){
            str += Logger.__getStackTrace(stack())
        }        
        
        Logger._logger.log.apply(Logger._logger, ["error", str]);    
	},

	fatal() {
        let str = Logger.__serialize(arguments) + Logger.__getStackTrace(stack())
        Logger._logger.log.apply(Logger._logger, ["error", str]);    
	}     
}

Logger.init()
Logger.setLevel('debug')

module.exports = Logger
