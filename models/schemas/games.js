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
        required: false
    },
    violence: {
        type: String,
        required: false,
    },
    sexAndNudity: {
        type: String,
        required: false,
    },
    alcoholAndDrugs: {
        type: String,
        required: false,
    },
    gambling: {
        type: String,
        required: false,
    },
    explicitLanguage: {
        type: String,
        required: false,
    },
    averageScore: {
        type: String,
        required: false,
    },
    publisher: {
        type: String,
        required: false,
    },
    releaseDate: {
        type: Date,
        required: false,
    }
});
module.exports = mongoose.model('Games', gameSchema); // Database name