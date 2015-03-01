'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Cards2Schema = new Schema({
  name: String,
  proper: String,
  price: String,
  calories: String,
  sugar: String,
  swipeYes: Number,
  swipeNo: Number,
  snackOfTheWeek: Number,
  description: String,
  url: String,
  idNumber: String,
});

module.exports = mongoose.model('card-stack', Cards2Schema);