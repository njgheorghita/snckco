'use strict';

var _ = require('lodash');
var Cards2 = require('./cards2.model');

// Get list of cards2s
//exports.index = function(req, res) {
  //Cards2.find(function (err, cards2s) {
    //if(err) { return handleError(res, err); }
    //return res.json(200, cards2s);
  //});
//};

//Get list of cards2s filtered by user's previous votes
exports.index = function(req, res) {
  var userId = req.params.userId;
  console.log('asdfasdf', userId);
  Cards2.find(function (err, cards2s) {
    if(err) { return handleError(res, err); }
    return res.json(200, cards2s);
  });
};

// Get a single cards2
exports.show = function(req, res) {
  Cards2.findById(req.params.id, function (err, cards2) {
    if(err) { return handleError(res, err); }
    if(!cards2) { return res.send(404); }
    return res.json(cards2);
  });
};

// Creates a new cards2 in the DB.
exports.create = function(req, res) {
  Cards2.create(req.body, function(err, cards2) {
    if(err) { return handleError(res, err); }
    return res.json(201, cards2);
  });
};

// Updates an existing cards2 in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cards2.findById(req.params.id, function (err, cards2) {
    if (err) { return handleError(res, err); }
    if(!cards2) { return res.send(404); }
    var updated = _.merge(cards2, req.body);
    console.log("updated test", updated);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cards2);
    });
  });
};

// Deletes a cards2 from the DB.
exports.destroy = function(req, res) {
  Cards2.findById(req.params.id, function (err, cards2) {
    if(err) { return handleError(res, err); }
    if(!cards2) { return res.send(404); }
    cards2.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}