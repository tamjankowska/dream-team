const mongoose = require('mongoose');

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

module.exports = mongoose.model('Reviews', reviewSchema);