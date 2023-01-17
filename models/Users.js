const mongoose = require("mongoose");

const { videosSchema } = require("./Videos");

const { Schema } = mongoose;

const usersSchema = new Schema({
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

const Users = mongoose.model("Users", usersSchema);

module.exports = {Users, usersSchema};