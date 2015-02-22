'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: String,
  messageDate: String,
  message: String,
});
console.log('asdfasdfasdfads');
module.exports = mongoose.model('Contact', ContactSchema);