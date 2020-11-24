// require model
const Workout = require('../models/workout')


// export
module.exports = {
    index,
    new: newWorkout,
    create,
    show,
    delete: deleteWorkout,
    edit,
    update
}

function index(req, res) {
    Workout.find({}, function (err, workouts) {
        //console.log(workouts)
        res.render('workouts/index', {
            workouts,
            user: req.user
        })
    })
}

function newWorkout(req, res) {
    res.render('workouts/new', {
        title: 'Add Workout',
        user: req.user
    });

}

function create(req, res) {
    Workout.create(req.params.id, req.body, function (err, workouts) {
        //const User = req.user.workout.id(req.params.id)
        //user.workoutId.push(user._id)
        req.user.save(function (err) {
            res.redirect('/workouts')
        })

    });
}



function show(req, res) {
    Workout.findById(req.params.id, function (err, workout) {
        //console.log(err);


        res.render('workouts/show', {
            workout,
            user: req.user
        })
    })
    //issue here with workout or workouts?
};


// edit will take a you to the page and the update will workout find one and update render

function deleteWorkout(req, res) {
    Workout.findByIdAndDelete(req.params.id, function (err, workout) {

        res.redirect('/workouts')
    });

}

function edit(req, res) {
    workoutId = req.params.id
    Workout.findById(req.params.id, function (err, workout) {
        res.render('workouts/edit', {
            workout,
            user: req.user
        })
    })
}

function update(req, res) {
    Workout.findByIdAndUpdate(req.params.id, req.body, function (err, workout) {
        res.redirect(`/workouts/${req.params.id}`)
    })
}
// edit workoutId 