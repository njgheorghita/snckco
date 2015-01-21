'use strict';

var _ = require('lodash');
var Item = require('./item.model');

// Get list of Items
exports.index = function(req, res) {
  Item.find(function (err, Items) {
    if(err) { return handleError(res, err); }
    return res.json(200, Items);
  });
};

// Get a single Item
exports.show = function(req, res) {
  Item.findById(req.params.id, function (err, Item) {
    if(err) { return handleError(res, err); }
    if(!Item) { return res.send(404); }
    return res.json(Item);
  });
};

// Creates a new Item in the DB.
exports.create = function(req, res) {
  Item.create(req.body, function(err, Item) {
    if(err) { return handleError(res, err); }
    return res.json(201, Item);
  });
};

// Updates an existing Item in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Item.findById(req.params.id, function (err, Item) {
    if (err) { return handleError(res, err); }
    if(!Item) { return res.send(404); }
    var updated = _.merge(Item, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Item);
    });
  });
};

// Insert Vote to an item 

exports.voteItem = function(req,res) {
  Item.findById(req.params.id,function(err,Item){
    if(err){ return handleError(res,err);}
    Item.votes.forEach(function(Obj){
      Item.save(function(err){
        if (err) { return handleError(res, err); }
        return res.json(200, Item); 
      })
    })
  })
}

// Deletes a Item from the DB.
exports.destroy = function(req, res) {
  Item.findById(req.params.id, function (err, Item) {
    if(err) { return handleError(res, err); }
    if(!Item) { return res.send(404); }
    Item.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}