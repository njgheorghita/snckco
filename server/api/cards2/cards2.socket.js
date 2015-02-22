/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cards2 = require('./cards2.model');

exports.register = function(socket) {
  Cards2.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cards2.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cards2:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cards2:remove', doc);
}