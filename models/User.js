const mongoose = require("mongoose");

const { videosSchema } = require("./Video");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    channel: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    videos: {
        type: [videosSchema],
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = {User, userSchema};