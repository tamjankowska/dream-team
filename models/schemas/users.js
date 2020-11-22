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

userSchema.statics.checkExists = async function(email) {
    return await this.exists({emailAddress: email});
}

userSchema.statics.checkPassword = async function(email, password) {
    const user = await this.findOne({emailAddress: email})
    if (!user) {
        return false;
    }
    if (user.password == password) {
        return true;
    }
    return false;
}

module.exports = mongoose.model('Users', userSchema); // Database name