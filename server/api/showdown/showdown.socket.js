/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Showdown = require('./showdown.model');

exports.register = function(socket) {
  Showdown.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Showdown.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('showdown:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('showdown:remove', doc);
}