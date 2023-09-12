//will attached the .env values for us
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

//middleware
// express.json allow us to access the data from post and update response
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(( )=> {
    // use process.env.variable to get the variable values from env
    app.listen(process.env.PORT, ()=>{
    console.log('connected to db and listening on port 4000');
});
})
.catch(err => console.log(err))

// listen for requests

