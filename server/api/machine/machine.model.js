'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MachineSchema = new Schema({
  machineId: String,
  location: String
});

module.exports = mongoose.model('Machine', MachineSchema);