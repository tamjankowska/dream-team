const mongoose = require('mongoose');
const Reviews = require('./reviews');
const bcrypt = require('bcrypt');


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
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }]
});

userSchema.statics.checkExists = async function(email) {
    return await this.exists({emailAddress: email});
}

userSchema.statics.checkPassword = async function(email, password) {
    const user = await this.findOne({emailAddress: email})
    if (!user) {
        return false;
    }
    if (await bcrypt.compare(password, user.password)) {
        return true;
    }
    return false;
}

module.exports = mongoose.model('Users', userSchema); // Database name