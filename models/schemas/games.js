const mongoose = require('mongoose');

//subdocument for reviews below
const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    gameTitle: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true
    },
    reviewerName: {
        type: String,
        required: true
    },
    dateReviewed: {
        type: Date,
        required: true
    },
    reviewerScore: {
        type: String,
        required: true
    }
});

// parent schema with child nested
const gameSchema = new mongoose.Schema({
    reviews: [reviewSchema],
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