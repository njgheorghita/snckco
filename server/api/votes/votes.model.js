'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VotesSchema = new Schema({
  name: String,
  timeanddate: String,
  userId: String
});

module.exports = mongoose.model('Votes', VotesSchema);