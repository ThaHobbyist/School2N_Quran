const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const { User } = require('./../models')

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser((_id, done) => {
    User.findOne({ _id })
      .then((user) => {
        done(null, user)
      })
      .catch((error) => {
        done(error)
      })
  })

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        user.verifyPassword(password, function (err, isMatch) {
          if (err) { return done(err); }
          if (!isMatch) { return done(null, false); }
          return done(null, user);
        })
      });
    }
  ));
}
