var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({ name: String, message: String});
var Message = mongoose.model('Message', MessageSchema, 'messages');

router.get('/', function (req, res) {
    Message.find({}, function (err, foundMessages) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.send(foundMessages);
        };
    });
});

router.post('/', function (req, res) {
    console.log(req.body);
    var messageToAdd = new Message(req.body);
    messageToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(201);
        };
    });
});

module.exports = router;