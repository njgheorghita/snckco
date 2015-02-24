/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
var cors = require('cors');
//var passport = require('passport');
mongoose.set('debug', true);
var cookieParser = require('cookie-parser');
//var session = require('express-session')
// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);


// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();

app.use(cookieParser());
require('./config/express')(app);
require('./routes')(app);

// app.use('/loggedin', function(req, res) {
//   res.send(req.isAuthenticated() ? req.user : '0');
// });
// app.use('/logout', function(req,res){
//   req.logout();
//   res.json(true);
// });

// app.use(session({ secret: 'sncko' }));
// app.use(passport.initialize());
// app.use(passport.session());

var whitelist = ['https://www.facebook.com'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

app.use(cors(corsOptions));
/*app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://www.facebook.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});*/
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: (config.env === 'production') ? false : true,
  path: '/socket.io-client'
});
//app.get('/loggedin', function(req, res) {
//   res.send(req.isAuthenticated() ? req.user : '0');
// });
// app.get('/logout', function(req,res){
//   req.logout();
//   res.json(true);
// });
require('./config/socketio')(socketio);
// require('./config/express')(app);
// require('./routes')(app);
//app.use(cors());
// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;