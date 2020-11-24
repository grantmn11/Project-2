
const User = require('../models/user')


module.exports = {
    index,
    addWorkout

    
}

function index(req, res){
        User.find({}, function(err, users) {
          res.render('workouts/index', { 
            users,
          user: req.user
         });
        });
      
}

function addWorkout(req, res){
    req.user.workout.push(req.body);
    req.user.workout.save(function(err){
      res.redirect('/workouts');
    })
}


