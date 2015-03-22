'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var app = express();
var router = express.Router();
var User = require('../../api/user/user.model');



passport.serializeUser(function(user, done) {
    console.log('serializeUser: ' + user._id)
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        if(!err) done(null, user);
        else done(err, null)  
    })
});


router.post('/', function(req, res, next) {
  console.log('string-anythings');
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    var token = auth.signToken(user._id, user.role);
    res.json({token: token});
  })(req, res, next)
});

router.get('/auth/facebook', passport.authenticate('facebook', function (err, user, info){
  console.log(info);
  var token = auth.signToken(user._id,user.role);
  res.json({token:token});},
  {scope: ['email']}
  ));

// router.get('/auth/facebook/callback', function(req, res, next) {
//   passport.authenticate('facebook', function(err, user, info) {
//     if (err) { next(err); }
//     if (!user) { res.redirect('/login'); }
//     auth.setTokenCookie(req, res);
//     res.redirect('/');
//   })(req, res, next);  
// })

router.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

router.get('/auth/twitter', passport.authenticate('twitter', function (err, user, info){
  console.log(info, 'asdfasdfas');
  var token = auth.signToken(user._id,user.role);
  res.json({token:token});}
  ));

router.get('/auth/twitter/callback', 
  passport.authenticate('twitter', {successRedirect: '/myaccount',
                                    failureRedirect: '/login' }));
  
router.get('/success',function(req,res){
  console.log("redireced to the",req.user);
  res.json(req.user);
})

module.exports = router;
