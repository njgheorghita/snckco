'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  message: String,

});

module.exports = mongoose.model('Thing', ThingSchema);