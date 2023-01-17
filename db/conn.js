const mongoose = require("mongoose");

async function main() {
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://flavicastelo:u3T9maAuD4b5pClo@cluster0.1pem9m7.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado ao banco!");
    } catch (error){
        console.log(`Erro? ${error}`);
    }
}

module.exports = main