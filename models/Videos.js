const mongoose = require("mongoose");

const { Schema } = mongoose;

const videosSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true } //salva a data de criacao e atualizacao
);

const Videos = mongoose.model("Videos", videosSchema);

module.exports = {
    Videos,
    videosSchema,
}