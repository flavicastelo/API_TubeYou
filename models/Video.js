const mongoose = require("mongoose");

const { Schema } = mongoose;

const videosSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
    },
    unlike:{
        type: Number,
    },
    views: {
        type: Number,
    },
    idUser: {
        type: String,
    },
    channel: {
        type: String,
    }
}, { timestamps: true } //salva a data de criacao e atualizacao
);

const Videos = mongoose.model("Videos", videosSchema);

module.exports = {
    Videos,
    videosSchema,
}