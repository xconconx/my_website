const LocalStrategy = require(passport-local).Strategy;
const User = require(../../models/user);

const LocalSignupStrategy = new LocalStrategy(
  {
    usernameField: name,
    passwordField: password,
    passReqToCallback: true
  }, (req, name, password, done) => {
    // First, attempt to find the user.
    User.findOne({ name }, (error, user) => {
      if (error) return done(null, false)
      if (user) return done(null, false) // user already exists with that name!

      // destructure the fields from req.body to keep everything nice and neat
      const { name, password } = req.body;

      // validate the fields

      // If everything checks out, the user can be created
      User.create({
        name, password
      }, (error, user) => {
        if (error) return done(error);
        return done (null, user);
      })

    })
  }
);

module.exports = LocalSignupStrategy;

