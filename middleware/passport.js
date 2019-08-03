const passport = require("passport");
const User = require("../models/user");

const LocalLoginStrategy = require("./strategies/local-login");
const LocalSignupStrategy = require("./strategies/local-signup");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  })
});

module.exports = passport => {
  passport.use("local-login", LocalLoginStrategy),
  passport.use("local-signup", LocalSignupStrategy)
};
