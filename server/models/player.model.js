const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required:[true, "Player name is required"],
        minlength : [2, "Players name must be at least 3 characters"]
    },
    position: {
        type : String,
        required:[true, "Player position is required"]
    }
}, { timestamps: true });

const Player = mongoose.model("Player", PlayerSchema)

module.exports = Player