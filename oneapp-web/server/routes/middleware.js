'use strict';
const Settings = require('../../Settings');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const useragent = require('express-useragent');
const Logger = require('../utils/Logger');
const bearerToken = require('express-bearer-token');
const AuthError = require('../errors/AuthError');
const cache = require('memory-cache');
const mongoSanitize = require('express-mongo-sanitize');
const crypto = require('crypto');

require('express-async-errors');

//apicache.options({
//  appendKey: (req, res) => req.method + req.token,
//})

// @see https://expressjs.com/en/advanced/best-practice-security.html
exports.set = app => {
	app.disable('x-powered-by');
	app.use(
		morgan('dev', {
			skip: function(req, res) {
				// Log url's with bad status codes
				return res.statusCode < 400;
			}
		})
	);
	app.use(useragent.express());
	app.use(bodyParser.json({ limit: '50mb'}));
	app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
	app.use(allowCrossDomain);
	app.use(bearerToken()); // Attempt to extract bearer token, if in header, see https://www.npmjs.com/package/express-bearer-token
	app.use(helmet()); // Security
    //app.use(mongoSanitize()); // https://www.npmjs.com/package/express-mongo-sanitize
	//app.use(cacheMiddleware(process.env.CACHE_SLOW || 10));
};

//CORS middleware
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-Forwarded-For, X-Forwarded-Proto, X-Forwarded-Port, X-Requested-With, Content-Type, x-onwrd-eid');
	// intercept OPTIONS method and return 200
	if ('OPTIONS' == req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
};


// configure cache middleware
let memCache = new cache.Cache();

/**
 * TODO investigate security risks
 * @param {*} duration 
 */
let cacheMiddleware = (duration) => {
	return (req, res, next) => {

		let path = req.route ? req.route.path : '';
		let url = req.originalUrl || req.url;

		if (req.method == 'GET' || url.search('/search') != -1){

			let payload = JSON.stringify(req.body);	
			payload += req.token;
			Logger.debug(url, payload);
			let hash = crypto.createHash('sha1').update(url + payload, 'utf8').digest('base64');

			//let hash = url + '|' + payload;
			//let hash = crypto.createHash('sha1-base64').update(req.originalUrl || req.url).digest('base64');
		
			//let key = 'cache_key_' + req.originalUrl || req.url;
			let key = `KEY_${hash}`;
	
			let cacheContent = memCache.get(key);
	
			if (cacheContent){
				Logger.debug(`Cache HIT for key = ${url}`);
				res.send( cacheContent );
				return
			} 
			else {
				Logger.warn(`Cache MISS for key = ${url}`);
				res.sendResponse = res.send
				res.send = (body) => {
					memCache.put(key,body,duration*1000);
					res.sendResponse(body)
				}
				next()
			}

		}
		else {
			Logger.warn(`Cache IGNORE for key = ${url}`);
		}

	}
};



// Handle errors (NOTE: any middleware with 4 arguments is classified as "error handling middleware",
// and will only get called in an error occurs. @see https://expressjs.com/en/guide/error-handling.html
var errorHandler = function(err, req, res, next) {

	
	//var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	//var path = req.route ? req.route.path : '';
	let path = req.originalUrl;
	let code = 500;

	Logger.error(`[${req.method}] ${path}: ${err.toString()}`);

	// ValidationError (base class DatabaseError, BaseError, Error.... so could just catch DatabaseError?)
	if (err instanceof Settings.sequelize.UniqueConstraintError){
		Logger.error(err.message, err.fields, err.sql);
	}
	else if (err instanceof AuthError) {
		code = AuthError.code;
	}

	res.status(code).send({ result: 'fail', message: err.toString() });

	return false;
};

exports.setFinal = app => {
	// Handle errors (NOTE: any middleware with 4 arguments is classified as "error handling middleware",
	// and will only get called in an error occurs. @see https://expressjs.com/en/guide/error-handling.html
	app.use(errorHandler);
};
