const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});


const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
