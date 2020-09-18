'use strict';
const Logger = require('../utils/Logger');
const NameGenerator = require('../utils/NameGenerator');
const _ = require('lodash');
const Field = require('../models/Field');
const ParamError = require('../errors/ParamError');

const FieldAPI = {

	// ///////////////////////////////////////////////////////////////////////////////////////

	async loadField(req, res, next){

		if (!req.params.fieldId){
			throw new ParamError(`You must specify the field id`);
		}

		req.field = await Field.findOne({_id: req.params.fieldId});

		if (!req.field){
			throw new Error(`Could not find field ${req.params.fieldId}`);
		}

		next();
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async get(req, res) {
		res.json(req.field);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async getAll(req, res) {
		let fields = await Field.find({});
		res.json(fields);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

    async destroy(req, res){
        await req.field.remove();
        res.json({result:'ok'});
	},
		
	// ///////////////////////////////////////////////////////////////////////////////////////

	async update(req, res) {

        if (!req.body.field) {
            throw new ParamError('You must pass a field object with the fields you want to update');
		}		
		
		var forboden = ['_id'];
		
		for (var key in req.body.field) {
			
			if (_.indexOf(forboden, key) === -1 && req.body.field.hasOwnProperty(key)) {								
				req.field[key] = req.body.field[key];
			}
		}

		res.json(await req.field.save());
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async create(req, res) {

		let field = new Field({
			label: NameGenerator.getPlace()
		})

		res.json(await field.save());
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

};

module.exports = FieldAPI;