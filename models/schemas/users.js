const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    reviewer: {
        type: Boolean,
        required: true
    },
    profilePic: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('Users', userSchema); // Database name