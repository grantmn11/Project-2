// require model
const Workout = require('../models/workout')

// export
 module.exports = {
    index, 
    new: newWorkout,
    create,
    show
 }

 function index(req, res){
     Workout.find({}, function(err, workouts){
         res.render('workouts/new', { workouts })
     })
 }

 function newWorkout(req, res){
     const newWorkout = new Workout();
     res.render('workouts/new', { title: 'Add Workout'});

 }

 function create(req, res){
     const workout = new Workout(req.body);
     workout.save(function(err){
         console.log(workout);
         res.redirect('workouts/show')
     })
 }

 function show(req, res){
     Workout.findById(req.params.id, function(err, workout){
         console.log(workout);
         res.render('workouts/show', {workout})
         // issue here with workout or workouts?
     })
 }