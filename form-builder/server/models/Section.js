"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema

var schema = new Schema({
    title: {type: String},
    order: {type: Number, default: 0}
})


module.exports = mongoose.model('Section', schema)
