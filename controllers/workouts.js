// require model
const Workout = require('../models/workout')

// export
 module.exports = {
     new: newWorkout,
 }

 function newWorkout(req, res){
     res.render('workouts/new', { title: 'Add Workout'});

 }