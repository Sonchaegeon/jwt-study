var express = require('express');
var app = express();
var authRoute = require('./routes/auth');

app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server running : 3000'));