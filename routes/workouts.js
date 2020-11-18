// Module
const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

// mount route

router.get('/', workoutsCtrl.new);


// export

module.exports = router;