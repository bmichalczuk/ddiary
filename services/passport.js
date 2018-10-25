const passport = require("passport"),
    GoogleStrategy = require("passport-google-oauth20").Strategy,
    keys = require("../config/keys"),
    mongoose = require("mongoose");


const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id});
    if(existingUser) {
        done(null, existingUser);
    } else {
        const user = await new User({googleId: profile.id}).save();
        done(null, user);
    } 
  }
));