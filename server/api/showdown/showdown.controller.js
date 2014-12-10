'use strict';

var _ = require('lodash');
var Showdown = require('./showdown.model');

// Get list of showdowns
exports.index = function(req, res) {
  Showdown.find(function (err, showdowns) {
    if(err) { return handleError(res, err); }
    return res.json(200, showdowns);
  });
};

// Get a single showdown
exports.show = function(req, res) {
  Showdown.findById(req.params.id, function (err, showdown) {
    if(err) { return handleError(res, err); }
    if(!showdown) { return res.send(404); }
    return res.json(showdown);
  });
};

// Creates a new showdown in the DB.
exports.create = function(req, res) {
  Showdown.create(req.body, function(err, showdown) {
    if(err) { return handleError(res, err); }
    return res.json(201, showdown);
  });
};

// Updates an existing showdown in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Showdown.findById(req.params.id, function (err, showdown) {
    if (err) { return handleError(res, err); }
    if(!showdown) { return res.send(404); }
    var updated = _.merge(showdown, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, showdown);
    });
  });
};

// Deletes a showdown from the DB.
exports.destroy = function(req, res) {
  Showdown.findById(req.params.id, function (err, showdown) {
    if(err) { return handleError(res, err); }
    if(!showdown) { return res.send(404); }
    showdown.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}