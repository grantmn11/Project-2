// Module
const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

// mount route
router.get('/', workoutsCtrl.index)
router.get('/new', isLoggedIn, workoutsCtrl.new);
router.post('/', isLoggedIn, workoutsCtrl.create);
router.get('/:id', isLoggedIn, workoutsCtrl.show);
router.delete('/:id', workoutsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

// export

module.exports = router;