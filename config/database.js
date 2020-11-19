// require modules
const mongoose = require('mongoose')

// set up shortcut variable (db)
const db = mongoose.connection;

// connect to datavase server
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// listener
db.on('connected', function(){
    console.log(`Connected to MongoDB on ${db.host}: ${db.port}`);
})

db.on('error', function(err){
    console.log(`Encountered an error: ${error.message}`)
})
