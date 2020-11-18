// require Modules
const express = require('express');
const port = 3000;
const morgan = require('morgan')
const indexRouter = require('./routes/index')
const workoutsRouter = require('./routes/workouts')
// express app
const app = express();

// config server
require('./config/database');

app.set('view engine', 'ejs');
// mount middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

// mount routes
app.use('/', indexRouter)
app.use('/workouts', workoutsRouter);
// tells the app to listen
app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`)
})