'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var app = express();
var router = express.Router();



passport.serializeUser(function(user, done) {
    console.log('serializeUser: ' + user._id)
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    db.users.findById(id, function(err, user){
        console.log(user)
        if(!err) done(null, user);
        else done(err, null)  
    })
});


router.post('/', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    var token = auth.signToken(user._id, user.role);
    res.json({token: token});
  })(req, res, next)
});

router.get('/auth/facebook', passport.authenticate('facebook',function(){
  var token = auth.signToken(user._id,user.role);
  res.json({token:token});
}));

router.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/success',
                                      failureRedirect: '/login' }));

router.get('/success',function(req,res){
  console.log("redireced to the",req.user);
  res.json(req.user);
})

module.exports = router;
