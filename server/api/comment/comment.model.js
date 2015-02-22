'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: String,
  message: String,
});

module.exports = mongoose.model('Comment', CommentSchema);