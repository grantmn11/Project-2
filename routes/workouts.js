// Module
const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

// mount route
router.get('/', workoutsCtrl.index)
router.get('/new', workoutsCtrl.new);
router.post('/new', workoutsCtrl.create);
router.get('/:id', workoutsCtrl.show);


// export

module.exports = router;