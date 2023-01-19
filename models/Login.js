const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginSchema = new Schema({
    
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    
}, { timestamps: true });

const Login = mongoose.model("Login", loginSchema);

module.exports = {Login, loginSchema};