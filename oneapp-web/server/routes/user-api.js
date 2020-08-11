'use strict';
const Settings = require('../../Settings');
const Logger = require('../../common/utils/Logger');
const _ = require('lodash');
const EmailValidator = require('email-validator');
const SessionAPI = require('./session-api');
const FirebaseHelper = require('../../common/services/FirebaseHelper');
const bcrypt = require('bcrypt')
const IdentityService = require('../identity-service/IdentityService');
const AccountService = require('../../api-accounts/account-service/AccountService');
const SearchQueryHelper = require('../../common/utils/SearchQueryHelper');
const chalk = require('chalk');
const ParamError = require('../../common/errors/ParamError');
const {User, Employer, UserToEmployer, PayrollGroup, Bots} = require('../../common/models/sql');
const UserLevel = require('../../common/utils/UserLevel');

var UserAPI = {

	// ///////////////////////////////////////////////////////////////////////////////////////

	isPasswordComplex(password) {

		var hasUpperCase = /[A-Z]/.test(password);
		var hasLowerCase = /[a-z]/.test(password);
		var hasNumbers = /\d/.test(password);
		//var hasNonalphas = /\W/.test(password);
		//var characterGroupCount = hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas;
		var characterGroupCount = hasUpperCase + hasLowerCase + hasNumbers;

		//console.log('characterGroupCount = ' + characterGroupCount);

		if ((password.length >= 8) && (characterGroupCount >= 3)) {
			return true;
		}
		else {
			return false;
		}
	},

	// ///////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Let sim-bots skip firebase login (otherwise a simulated run will trigger firebase's security measures
	 * for too many logins from the same IP). And confirm this is really a bot!
	 */
	async __loadSimBotFacebookUser(req, res){

		let isSimBot = false;
		let fbUser = null;

        if (req.body.password == process.env.TEST_USER_PASSWORD){
            let bot = await Bots.findOne({where: {email: req.body.email}});
            if (bot){
				isSimBot = true;
				fbUser = {
					uid: `bot-${bot.id}`
				}				
            }
		}

		if (!isSimBot){
				
			// First register in firebase (but check if it already exists there)

			try {
				fbUser = await FirebaseHelper.getUserByEmail(req.body.email);
			}
			catch(err){
				//Logger.error(err);
				// Don't care, prob firebase complaining the user doesn't exist yet
			}

			// Check this is the same user, if not bomb out
			if (!fbUser){
				fbUser = await FirebaseHelper.register(req.body.email, req.body.password);
			}

			if (!fbUser) {
				Logger.error(`Unknown error creating firebase user for ${req.body.email}`);
				throw new Error('Error creating user');
			}	

		}	
		
		return fbUser;
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Register a user
	 */
	async register(req, res) {

		//if (!req.body.employerId){
        //    throw new Error('You must provide an employerId');
		//}

        if (!req.body.email || !EmailValidator.validate(req.body.email)) {
            throw new ParamError('You must give an valid email');
        }

        if (!req.body.password) {
            throw new ParamError('You must give a valid password');
		}
		
		// Associate with a company, lets try to find the employer first
        let employer = await Employer.findOne({where: {uuid: req.body.employerId}})

		if (!employer && req.body.employerId) {
			throw new Error(`Could not find employer ${req.employer.employerId}`);
		}

		// Check for password complexity
		if (!UserAPI.isPasswordComplex(req.body.password)){
            throw new Error('Passwords must be at least 8 characters long and contain at least one number and one uppercase letter.');
		}

		let fbUser = null;

        // Let sim-bots skip firebase login, but confirm this is really a bot!
		fbUser = await UserAPI.__loadSimBotFacebookUser(req, res)
		
		// Now register in our database
		
        // Look up user first, just in case
        let user = await User.findOne({where: {email: req.body.email}});
				
		// The user may already exist, created by an employer
		// If the user does exist, check the uid is the same. If not, something weird is going on
		if (user && user.uid != fbUser.uid){
            throw new Error('This email address is already registered');
		}
        else if (!user){
			
			user = await User.create({
				email: req.body.email, 
				uid: fbUser.uid,
				firstName: (req.body.firstName) ? req.body.firstName : null,
				lastName: (req.body.lastName) ? req.body.lastName : null,
				level: 'user',
				status: 'active',
				employerUuid: (employer) ? employer.uuid : null,
				bankingVendor: (employer) ? employer.bankingVendor : 'sandbox',
				employerId: (employer) ? employer.id : null
			});

			Logger.debug(`Created user ${user.id}`);
		}		
		else if (user){
			Logger.debug(`User already exists, password matches so logging in user ${user.id}`)
		}
		

		// Setup the user-to-employer relationships (if we have a employer id)
		// Note that we allow a registration to the admin dashboard without 
		// setting a employer id first - as we need to create a user and then
		// create the employer in that context!
		if (employer){

			// Get default group, if possible
			let defaultGroup = null;
			let groups = await PayrollGroup.findAll({where: {employerId: employer.id}});
			// If there is only 1 group, set it as default
			if (!_.isEmpty(groups) && groups.length == 1){
				defaultGroup = groups[0];
			}
	
			// Check relationship does not already exists
			let relationship = await UserToEmployer.findOne({
				where: {
					userId: user.id,
					employerId: employer.id
				}
			});
			
			if (!relationship){
	
				relationship = await UserToEmployer.create({
					uid: user.uid, 
					userId: user.id,
					employerUuid: employer.uuid,      
					employerId: employer.id,  
					groupUuid: (defaultGroup) ? defaultGroup.uuid : null,        
					groupId: (defaultGroup) ? defaultGroup.id : null,        
					companyId: null,        
					level: 'user',        
					status: user.email.endsWith(`@${employer.domain}`) ? 'verified' : 'unverified'
				});
	
			}

			// Create a synapse account if not already
			await AccountService.createAccount(user, employer);
		}
		else {
			Logger.warn(`No employer info for user ${user.id}`);
		}


        // Hash and store password on our side for future use (migration)
        let salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
        let hash = await bcrypt.hash(req.body.password, salt)
		
        // Hash and store password on our side for future use (migration)		
        user.passwordHash = hash.toString();
        //user.passwordSalt = salt;
		user.hashAlgo = `bcrypt/${process.env.SALT_ROUNDS}`;
		req.user = await user.save();

		// Create a session, and return with it		
		let seshInfo = await SessionAPI._createSession(req);
		
		// Send success, user can now login but return session info anyway
		return res.json(seshInfo);		
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async get(req, res) {
		//let safeUser = UserAPI.santizeUser(req.user, req.headers['x-onwrd-eid'])
		let safeUser = req.user.sanitize(req.headers['x-onwrd-eid']);
		res.json(safeUser);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async update(req, res) {

        if (!req.body.user) {
            throw new ParamError('You must pass an user object with the fields you want to update');
		}		
		
		var forboden = ['id', 'uid', 'synapseUid', 'passwordHash', 'passwordSalt', 'hashAlgo', 'bankingVendor', 'level', 'created', 
			'modified', 'employerRelationships', 'address1Encoded', 'address2Encoded', 'cityEncoded', 'stateEncoded', 'zipEncoded', 
				'phoneNumberEncoded', 'ssnEncoded', 'dobEncoded', 'employerRelationship', 'fullName', 'ssnLast4', 'lastLogin', 'employerUuid'];
		
		var allowed = ['email', 'ssn', 'address1', 'address2', 'city', 'state', 'zip', 'phoneNumber', 'firstName', 'lastName' ,'dateOfBirth'];

		//
		// Check for an email change, and update in firebase if so...
		//

		if (req.body.user.email && req.user.email != req.body.user.email){
			try {
				let res = await FirebaseHelper.updateUser(req.user.uid, {email:req.body.user.email });
				// verfify it stuck
				let fbUser = await FirebaseHelper.getUserByEmail(req.user.uid);
				if (fbUser.email != req.user.email){
					req.user.email = fbUser.email;
				}
			}
			catch (err){
				Logger.error(`Error updating user ${req.user.uid} email address to ${req.body.user.email}`, err);
				throw err;
			}
		}

		//
		// Now update the database, taking care of the encrpted fields
		//

		let changes = [];

		for (var key in req.body.user) {
			
			if (_.indexOf(allowed, key) !== -1 && req.body.user.hasOwnProperty(key)) {
								
				if (!req.body.user[key]){
					req.body.user[key] = null;
				}

				if (req.body.user[key] && req.user[key] != req.body.user[key]){
					//Logger.debug(`Changed: [${chalk.red(key)}] ${req.user[key]} = ${req.body.user[key]}`);
					//Logger.debug(`Changed: [${chalk.red(key)}] `);
					req.user[key] = req.body.user[key];
					changes.push(key);
				}
				//else {
				//	Logger.debug(`NOT Changed: [${chalk.green(key)}] ${req.user[key]} = ${req.body.user[key]}`);
				//}

			}
		}

		let updated = await req.user.save();

		// Signal the ident service that we mat have relevant changes
		if (req.user.employerId){
			let employer = await Employer.findOne({where:{id:req.user.employerId}});
			let idService = new IdentityService(req.user, employer);
			await idService.registerChanges(changes);
			await idService.sync();	
		}

		res.json(updated.sanitize());
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

    async searchUsers(req, res){
		let results = await UserAPI.doSearchUsers(req, res);
		res.json(results);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async doSearchUsers(req, res){

		let queryOpts =  {
			companyId: {type: 'basic', subQuery: 'reltnQry'},
			compantLevel: {type: 'basic', key: 'level', subQuery: 'reltnQry'},
			compantStatus: {type: 'basic', key: 'status', subQuery: 'reltnQry'},			
            //employerUuid: {type: 'const', value: req.headers['x-onwrd-eid'], subQuery: 'reltnQry'},
            //employerId: {type: 'const', value: req.employer.id, subQuery: 'reltnQry'},
            
            tier: {type: 'numeric'},
            uid: {type: 'basic'},
			uids: {type: 'array', key: 'uid'},
			statuses: {type: 'array', key: 'status'},
			status: {type: 'basic'},
            email: {type: 'text-search'},
            textSearch: {type: 'compound-text-search', keys: ['firstName', 'lastName', 'email']},
            fullName: {type: 'compound-text-search', keys: ['firstName', 'lastName']},
            firstName: {type: 'text-search'},
			lastName: {type: 'text-search'},
            hasSavings: {type: 'basic'},
            bankingStatus: {type: 'basic'},
            bankingStatuses: {type: 'array', key: 'bankingStatus'},
            isFlagged: {type: 'basic'},
			hasActiveLoan: {type: 'basic'},
            created: {type: 'date'}, // expects an object with {from, to} fields            
		}
		
		let ul = new UserLevel(req.user.level);
		
		if (ul.gte('super')){
			// Allow super/uber users to query on any employer
			queryOpts.employerUuid = {type: 'basic', subQuery: 'reltnQry'};
		}
		else {
			// Allow non super/uber users to query only on the current employer and hide hidden users
			queryOpts.isHidden = {type: 'const', value: false};
			queryOpts.employerUuid = {type: 'const', value: req.headers['x-onwrd-eid'], subQuery: 'reltnQry'};
		}
		
		const params = SearchQueryHelper.processQueryParams(req.body, queryOpts);

        //Logger.debug('req.body = ', req.body);        
        //Logger.debug('params = ', params);

		// Fields that we don't want to send back
		let forboden = ['passwordHash', 'passwordSalt', 'hashAlgo', 'vendor', 'synapseUid', 'ssn', 'address1Encoded', 'address1Encoded', 'address2Encoded', 'cityEncoded', 'stateEncoded', 'zipEncoded', 'zipEncoded', 'phoneNumberEncoded', 'ssnEncoded', 'dobEncoded'];

		// No PII unless you have uber access
		if (!req.user || req.user.level != 'uber') {
			forboden = forboden.concat(['address1', 'address2', 'city', 'zip', 'dateOfBirth', 'phoneNumber', 'hasActiveLoan', 'hasSavings', 'email', 'lastIp', 'ssnLast4']);
		}

		// Now do the actual queries...

		let includes = [
			{
				model: UserToEmployer,
				where: params.reltnQry,
				as: 'employerRelationship'
			}
		];

		let count = await User.count({
			where: params.qry,
			//include: includes
		})

		let docs = await User.findAll({
            where: params.qry,
            limit: params.limit,
            offset: params.skip,
			order: [params.orderBy],
			attributes: { exclude: forboden },
			include: includes,
			raw: true, 
			nest: true
		});

        var data = {
            results: docs, // _.map(docs, function(o){return o.sanitize()}),
            meta: {
                pageNumber: Math.ceil(params.skip / params.limit),
                limit: params.limit,
                skip: params.skip,
                numberPages: Math.ceil(count / params.limit),
                totalResults: count
            }
		};

		return data;
    }

};


if (require.main === module) {
        
    setTimeout(async function () {

        let req = {
            headers: {'x-onwrd-eid': '8ed0ac21-86bf-42d2-81b8-9ac5ccbe32df'},
            employer: {
                id :4,
                uuid: '8ed0ac21-86bf-42d2-81b8-9ac5ccbe32df'
            },
            query: {}
        }

        let res = {
            json(docs){
                //Logger.info(docs[0])
                Logger.info(JSON.parse(JSON.stringify(docs)))
            }
		}
		
		let docs = await UserAPI.doSearchUsers(req);
		
		//Logger.info(JSON.parse(JSON.stringify(docs.results)))

        process.exit(1);

    }, 1000)
} 
else {
	module.exports = UserAPI;
}


