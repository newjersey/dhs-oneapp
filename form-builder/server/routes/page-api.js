'use strict';
const Logger = require('../utils/Logger');
const NameGenerator = require('../utils/NameGenerator');
const _ = require('lodash');
const Page = require('../models/Page');
const ParamError = require('../errors/ParamError');

const PageAPI = {

	// ///////////////////////////////////////////////////////////////////////////////////////

	async loadPage(req, res, next){

		if (!req.params.pageId){
			throw new ParamError(`You must specify the page id`);
		}

		req.page = await Page.findOne({_id: req.params.pageId});

		if (!req.page){
			throw new Error(`Could not find page ${req.params.pageId}`);
		}

		next();
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async get(req, res) {
		res.json(req.page);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async getAll(req, res) {
		let pages = await Page.find({});
		res.json(pages);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

    async destroy(req, res){
        await req.page.remove();
        res.json({result:'ok'});
    },

	// ///////////////////////////////////////////////////////////////////////////////////////

	async update(req, res) {
				
		var forboden = ['_id'];
		
		for (var key in req.body) {
			
			Logger.debug(`Saving page: ${key} = ${req.body[key]}`);
			
			if (_.indexOf(forboden, key) === -1 && req.body.hasOwnProperty(key)) {								
				req.page[key] = req.body[key];
			}
		}

		let updated = await req.page.save();

		res.json(updated);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

	async create(req, res) {

		let maxOrder = await Page.findOne().sort({'order':-1});

		let page = new Page({
			title: NameGenerator.getPlace(),
			order: (maxOrder) ? maxOrder.order+1 : 1
		})

		let saved = await page.save();

		res.json(saved);
	},

	// ///////////////////////////////////////////////////////////////////////////////////////

};

module.exports = PageAPI;