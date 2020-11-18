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


const workoutSchema = new Schema({
    walk: String,
    run: String,
    hiit: String,
    weight: String,
    bodyweight: String,
    users: [userSchema]

}, { timestamps: true });



// export Schema Model
module.exports = mongoose.model('Workout', workoutSchema);