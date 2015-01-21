'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/*
	Schme desing based on assumption that an item can belong to only one machine.

	# of votes and by whom
*/
var ItemSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  machineId:Schema.Types.ObjectId,  //this will reference an item to a particular machine
  votes:[{
  	name:String,
  	userId:Schema.Types.ObjectId
  }]
});

module.exports = mongoose.model('Item', ItemSchema);