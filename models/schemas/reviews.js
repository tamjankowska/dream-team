const mongoose = require('mongoose');
const Games = require('./games');
const Users = require('./users');

const reviewSchema = new mongoose.Schema({
    gameID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Games'
    },
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
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    dateReviewed: {
        type: Date,
        required: true
    },
    reviewerScore: {
        type: String,
        required: true
    },
    linkToBuy: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reviews', reviewSchema);