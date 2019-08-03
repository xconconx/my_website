const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/user");

const LocalLoginStrategy = new LocalStrategy({
  usernameField: name,
  passwordField: password
}, (name, password, done) => {
  User.findOne({ name }, (error, user) => {
    if (error) return done(null, false)
    if (user) return done(null, false) // user already exists with that name!

    // destructure the fields from req.body to keep everything nice and neat
    const { name, password } = req.body;

    // validate the fields
    if (!name) return done("name field is required!");
    if (!password) return done("Password field is required!");

    // If everything checks out, the user can be created
    User.create({
      name, password 
    }, (error, user) => {
      if (error) return done(error);
      return done (null, user);
    })

  })
});

module.exports = LocalLoginStrategy;
