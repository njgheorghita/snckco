var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../api/user/user.model');


exports.setup = function (User, config) {
  passport.use(new FacebookStrategy({
    clientID: '1537518993126874',
    clientSecret: '9c555e9a2990f1d68b721cd86bd1542a',
    callbackURL: "http://localhost:9000/auth/local/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      User.findOne({ email: profile._json.email }, function(err, user) {
            if(err) { console.log(err); }
            if (!err && user != null) {
                done(null, user);
            } else {
                
                var user = new User({
                    email: profile._json.email,
                    name: profile.displayName,
                    created: Date.now(),
                    role:'user',
                    provider:'facebook',
                    password:profile._json.email
                });
                user.save(function(err) {
                    
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("saving user ...");
                        done(null, user);
                    }
                });
            }
        });
    }));
  }
