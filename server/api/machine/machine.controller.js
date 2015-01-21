'use strict';

var _ = require('lodash');
var Machine = require('./machine.model');

// Get list of Machines
exports.index = function(req, res) {
  Machine.find(function (err, Machines) {
    if(err) { return handleError(res, err); }
    return res.json(200, Machines);
  });
};

// Get a single Machine
exports.show = function(req, res) {
  Machine.findById(req.params.id, function (err, Machine) {
    if(err) { return handleError(res, err); }
    if(!Machine) { return res.send(404); }
    return res.json(Machine);
  });
};

// Creates a new Machine in the DB.
exports.create = function(req, res) {
  Machine.create(req.body, function(err, Machine) {
    if(err) { return handleError(res, err); }
    return res.json(201, Machine);
  });
};

// Updates an existing Machine in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Machine.findById(req.params.id, function (err, Machine) {
    if (err) { return handleError(res, err); }
    if(!Machine) { return res.send(404); }
    var updated = _.merge(Machine, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Machine);
    });
  });
};

// Deletes a Machine from the DB.
exports.destroy = function(req, res) {
  Machine.findById(req.params.id, function (err, Machine) {
    if(err) { return handleError(res, err); }
    if(!Machine) { return res.send(404); }
    Machine.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}