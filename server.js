// require Modules
const express = require('express');
const port = 3000;
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')
const indexRouter = require('./routes/index')
const workoutsRouter = require('./routes/workouts')
const usersRouter = require('./routes/users')

require('dotenv').config();
// express app
const app = express();

// config server
require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');
// mount middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// mount routes
app.use('/', indexRouter)
app.use('/workouts', workoutsRouter);
app.use('/', usersRouter);
// tells the app to listen
app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`)
})