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
        type: Number,
        required: true
    },
    violence: {
        type: Number,
        required: true
    },
    sexAndNudity: {
        type: Number,
        required: true
    },
    alcoholAndDrugs: {
        type: Number,
        required: true
    },
    gambling: {
        type: Number,
        required: true
    },
    explicitLanguage: {
        type: Number,
        required: true
    },
    averageScore: {
        type: Number,
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