const express = require("express"),
    app = express(),
    keys = require("./config/keys.js");
    mongoose = require("mongoose"),
    cookieSession = require("cookie-session"),
    passport = require("passport");

mongoose.connect(keys.mongoURI);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send({hi: "there"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);