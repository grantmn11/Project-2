// require Module
const mongoose = require('mongoose');
// Shortcut
const Schema = mongoose.Schema;
// Schema


const userSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
    }, { timestamps: true });
// export Schema Model
module.exports = mongoose.model('User', userSchema);