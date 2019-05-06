// TODO: * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// TODO: * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require('path');
var express = require('express');
var apirouter = express.Router();

var Friends = require('../data/friends.js');

var friends = new Friends();

//return friends array
apirouter.get('/api/friends', function(req, res){
    console.log("Sending friends");
    res.send(friends);    
});

apirouter.post('/api/friends', function(req, res){
    console.log("Received survey answers");
    friends.friends.push(req.body.body);
    console.log(friends.friends);
    friends.findAMatch();
    res.send("Survey was submitted.");
});


module.exports = apirouter;