const mongoose = require("mongoose"),
    {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    data: {
        type: Object,
        default: {
            diary: {}
        }
    }
}, {minimize: false});

mongoose.model("users", userSchema);
