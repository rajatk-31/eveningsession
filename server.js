var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config.json')
var todo = require('./routes/routes')
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('secret',config.SECRET)
mongoose.connect(config.MONGO, ()=>{
    console.log("Database connected")
})

app.use('/', todo)


app.listen(config.PORT, ()=>{
    console.log("Server started on port : ",config.PORT)
})