// Modules
const express = require('express')
const indexCtrl = require('../controllers/index')
const passport = require('passport');

// router object
const router = express.Router()

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
// route for after google validation
router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/workouts',
    failureRedirect: '/'

}));

router.get('/logout', function(req, res){
    req.logOut();
    res.redirect('/');
})
// define our routes
router.get('/', indexCtrl.index);
// export the router object
module.exports = router;