const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const animalRegistration = require('./routes/api/animalRegistration')
const animalInsemination = require('./routes/api/animalInsemination')
const calvingRegister = require('./routes/api/calvingRegister')
const milkRecordingRegister = require('./routes/api/milkRecordingRegister')
const calfRegister = require('./routes/api/calfRegister');

const dashboardExcel = require('./routes/api/dashboardExcel');
const currentPosition = require('./routes/api/currentPosition')
const app = express();


//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);


//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//app.get('/', (req, res) => res.send('Hello World'));

//use routes
app.use('/api/users', users);
app.use('/api/animalRegistration', animalRegistration);
app.use('/api/animalInsemination', animalInsemination);
app.use('/api/calvingRegister', calvingRegister);
app.use('/api/milkRecordingRegister', milkRecordingRegister);
app.use('/api/calfRegister', calfRegister);
app.use('/api/dashboardExcel', dashboardExcel);
app.use('/api/current', currentPosition);
//const port = process.env.PORT || 5000; 
//process.env.PORT for Heroku
const port = 5000;

app.listen(port, () => console.log(`Server Running on Port ${port}`));
module.exports.app = app;