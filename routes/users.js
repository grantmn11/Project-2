
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')

router.get('/', isLoggedIn, usersCtrl.index)
//router.get('/users/:id', isLoggedIn, usersCtrl.show)

//router.post('/workouts', isLoggedIn, usersCtrl.addWorkout)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }



module.exports = router;
