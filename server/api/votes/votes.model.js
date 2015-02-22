'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VotesSchema = new Schema({
  name: String,
  swipeYes: Number,
  swipeNo: Number,
  timeanddate: String,
  userId: String
});

module.exports = mongoose.model('Votes', VotesSchema);