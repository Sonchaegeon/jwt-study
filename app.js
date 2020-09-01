var express = require('express');
var app = express();
var dotenv = require('dotenv');
var mongoose = require('mongoose');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true},
    () => console.log('connected to db!')
);

var authRoute = require('./routes/auth');

app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server running : 3000'));