const mongoose = require("mongoose"),
    {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    data: Object
});

mongoose.model("users", userSchema);
