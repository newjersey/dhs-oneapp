"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema

var schema = new Schema({
    sectionId: { type: Schema.Types.ObjectId, index:true},
    pageId: { type: Schema.Types.ObjectId, index:true},
    order: {type: Number, default: 0},
    title: { type: String},
    fields: [ {type: Schema.Types.ObjectId} ]
})


module.exports = mongoose.model('Page', schema)
