// require modules
const mongoose = require('mongoose')

// set up shortcut variable (db)
const db = mongoose.connection;

// connect to datavase server
mongoose.connect('mongodb://localhost/users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// listener
db.on('connected', function(){
    console.log(`Connected to MongoDB on ${db.host}: ${db.port}`);
})
