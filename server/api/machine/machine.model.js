'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MachineSchema = new Schema({
  machineId: String,
  location: String,
  sotw0:String,
  sotw1:String,
  sotw2:String,
  sotw3:String,
  tally0:Number,
  tally1:Number,
  tally2:Number,
  tally3:Number

});

module.exports = mongoose.model('Machine', MachineSchema);