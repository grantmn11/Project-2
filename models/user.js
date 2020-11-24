// require Module
const mongoose = require('mongoose');
// Shortcut
const Schema = mongoose.Schema;
// Schema

const workoutSchema = new Schema({
    workout: {
        type: String,
        enum: ['Walk', 'Run', 'HIIT', 'Weights', 'BodyWeight']
    },
    intensity: {
        type: Number,
        min: 1,
        max: 5
    },

    date: {
        type: Date,
        default: function(){
            const date = new Date();
            const year = date.getFullYear();
            return date;
        
        },
        
    }

    // use the enum for the work out types in enum use walk run hiit etc
    // duration
    // intensity rating min 1 to max 5

}, { timestamps: true });

const userSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    workout: [workoutSchema],
    googleId: String
    },
    

    
    
    { timestamps: true });
// export Schema Model
module.exports = mongoose.model('User', userSchema);