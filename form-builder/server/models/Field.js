"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema

var schema = new Schema({
    pageId: { type: Schema.Types.ObjectId},
    title: { type: String},
    order: {type: Number, default: 0},
    label: { type: String},
    type: { type: String, default: 'text'},
    key: { type: String},
    help: { type: String},
    required: { type: Boolean, default: true},
    lead: { type: String},    
})


module.exports = mongoose.model('Field', schema)
