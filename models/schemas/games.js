const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ageRating: {
        type: String,
        required: true
    },
    violence: {
        type: String,
        required: true
    },
    sexAndNudity: {
        type: String,
        required: true
    },
    alcoholAndDrugs: {
        type: String,
        required: true
    },
    gambling: {
        type: String,
        required: true
    },
    explicitLanguage: {
        type: String,
        required: true
    },
    averageScore: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('Games', gameSchema); // Database name