const express = require("express"),
    app = express(),
    keys = require("./config/keys.js");
    mongoose = require("mongoose"),
    cookieSession = require("cookie-session"),
    passport = require("passport");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);