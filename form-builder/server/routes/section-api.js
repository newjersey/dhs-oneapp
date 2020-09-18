'use strict';
const Logger = require('../utils/Logger');
const NameGenerator = require('../utils/NameGenerator');
const _ = require('lodash');
const Section = require('../models/Section');
const ParamError = require('../errors/ParamError');

const SectionAPI = {

	// ///////////////////////////////////////////////////////////////////////////////////////

	async loadSection(req, res, next){

		if (!req.params.sectionId){
			throw new ParamError(`You must specify the section id`);
		}

		req.section = await Section.findOne({_id: req.params.sectionId});

		if (!req.section){
			throw new Error(`Could not find section ${req.params.sectionId}`);
		}

		next();
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async get(req, res) {
		res.json(req.section);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async getAll(req, res) {
		let sections = await Section.find({});
		res.json(sections);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async update(req, res) {	
		
		var forboden = ['_id'];
		
		for (var key in req.body.section) {
			
			if (_.indexOf(forboden, key) === -1 && req.body.section.hasOwnProperty(key)) {								
				req.section[key] = req.body.section[key];
			}
		}

		res.json(await req.section.save());
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async create(req, res) {

		let maxOrder = await Section.findOne().sort({'order':-1});

		let section = new Section({
			title: NameGenerator.getPlace(),
			order: (maxOrder) ? maxOrder.order+1 : 1
		})

		res.json(await section.save());
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

};

module.exports = SectionAPI;