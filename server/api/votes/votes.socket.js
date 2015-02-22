/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Votes = require('./votes.model');

exports.register = function(socket) {
  Votes.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Votes.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('votes:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('votes:remove', doc);
}