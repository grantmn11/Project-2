
const User = require('../models/user')
const Workout = require('../models/workout')

module.exports = {
    index,
    
}

function index(req, res){
        User.find({}, function(err, users) {
          res.render('users/index', { 
            users,
          user: req.user
         });
        });
      
}


