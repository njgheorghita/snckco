/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/cards2s', require('./api/cards2'));
  app.use('/api/comments', require('./api/comment'));
  app.use('/votes', require('./api/votes'));
  app.use('/api/contacts', require('./api/contact'));
  app.use('/api/showdowns', require('./api/showdown'));
  app.use('/y', require('./api/showdown'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/machines',require('./api/machine'));
  app.use('/api/items',require('./api/item'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
