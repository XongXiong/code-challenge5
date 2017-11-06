var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = require('./routes/messages.router.js');
var port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/messages', messages);

/** ---------- MONGOOSE ---------------- */
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/messages';

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});

mongoose.connect(databaseUrl);
// Eventually, the mongooose code should be in a module

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
