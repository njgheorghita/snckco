'use strict';

var _ = require('lodash');
var Votes = require('./votes.model');
var User = require('./../user/user.model');

// Get list of votess
exports.index = function(req, res) {
  Votes.find(function (err, votess) {
    if(err) { return handleError(res, err); }
    return res.json(200, votess);
  });
};

// Get a single votes
exports.show = function(req, res) {
  Votes.findById(req.params.id, function (err, votes) {
    if(err) { return handleError(res, err); }
    if(!votes) { return res.send(404); }
    return res.json(votes);
  });
};

// Creates a new votes in the DB.
exports.create = function(req, res) {
    console.log("test-");
    console.log(req.body);
    console.log("end-test");
  Votes.create(req.body, function(err, votes) {
    if(err) { return handleError(res, err); }

    User.collection.update({name: req.body.userId}, {$push: {cardnames : req.body.name}}, function(err, cards) {
    if(err) { return handleError(res, err); }
    return res.json(201, votes);
  });
  });



};

// Updates an existing votes in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Votes.findById(req.params.id, function (err, votes) {
    if (err) { return handleError(res, err); }
    if(!votes) { return res.send(404); }
    var updated = _.merge(votes, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, votes);
    });
  });
};

// Deletes a votes from the DB.
exports.destroy = function(req, res) {
  Votes.findById(req.params.id, function (err, votes) {
    if(err) { return handleError(res, err); }
    if(!votes) { return res.send(404); }
    votes.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}