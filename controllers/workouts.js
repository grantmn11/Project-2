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
         //console.log(workouts)
         res.render('workouts/index', { workouts })
     })
 }

 function newWorkout(req, res){
     res.render('workouts/new');

 }

 function create(req, res){
    Workout.create(req.body, function(err, workouts){
        res.redirect('/workouts')
    });
}
    


 function show(req, res){
    Workout.findById(req.params.id, function(err, workout){
        //console.log(err);
        res.render('workouts/show', {workout: workout._id})
        
        
      //issue here with workout or workouts?
    });
}

 

 