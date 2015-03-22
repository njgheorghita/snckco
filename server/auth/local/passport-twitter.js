var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../api/user/user.model');

exports.setup = function (User, config) {
	console.log("uniqqqe");
	passport.use(new TwitterStrategy({
		consumerKey		: "0kpcVVnMXooiJ5bXmWHyHUfmu",
		consumerSecret	: "AA2NnxknsM90fUlnOSmcnDt96ylebUJB3VwV5qHJVXUdr15WOk",
		callbackURL 	: "/auth/local/auth/twitter/callback"
	},
	function(accessToken, refreshToken, profile, done){
		User.findOne({ email: profile._json.email }, function(err,user) {
			if(err) {console.log(err);}
			if(!err && user != null) {
				done(null, user);
			} else {
				var user = new User({
					name: profile.displayName,
					email: profile.username,
					role:'user',
					created: Date.now(),
					provider:'twitter',
					cardnames: Array,
					password: profile.displayName
				});
				user.save(function(err) {
					if(err) {
						console.log(err);
					} else {
						console.log('saving user ....');
						done(null, user);
					}
				});
			}
		});
	}));
}