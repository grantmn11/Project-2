// require model
const Workout = require('../models/workout')

// export
 module.exports = {
    index, 
    new: newWorkout,
    create,
    show,
    delete: deleteWorkout
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
        res.render('workouts/show', { workout })
        
        
      //issue here with workout or workouts?
    });
}

// edit will take a you to the page and the update will workout find one and update render

 function deleteWorkout(req, res){
     Workout.findByIdAndDelete(req.params.id, function(err, workout){

        res.redirect('/workouts')
     });
     
 }

 