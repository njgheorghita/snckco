var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../api/user/user.model');


exports.setup = function (User, config) {
  passport.use(new FacebookStrategy({
    clientID: '763571913759952',
    clientSecret: '887aac4b7e30a6df40e11442d52b6211',
    callbackURL: "/auth/local/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'emails']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
      User.findOne({ email: profile._json.email }, function(err, user) {
            console.log(err, "errortag", user);
            if(err) { console.log(err); }
            if (!err && user != null) {
                done(null, user);
            } else {
                var user = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    role:'user',
                    created: Date.now(),
                    provider:'facebook',
                    cardnames: Array,
                    password: profile.emails[0].value
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
