// TODO: * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// TODO: * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require('path');
var express = require('express');
var apirouter = express.Router();

var friends = require('../data/friends.js');


//return friends array
apirouter.get('/api/friends', function(req, res){
    console.log("Sending friends");
    res.send(friends);    
});

apirouter.post('/api/friends', function(req, res){
    console.log("Received survey answers");
    console.log(friends);
    // TODO: find out why 'friends' is the typeof function
    console.log(req.body);
    res.send("Survey was submitted.");
});


module.exports = apirouter;