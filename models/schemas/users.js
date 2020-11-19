const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reviewer: {
        type: Boolean,
        required: true
    }
});
module.exports = mongoose.model('Users', userSchema); // Database name