var path = require('path');
var express = require('express');
var htmlrouter = express.Router();

htmlrouter.get('/', function(req, res){
    console.log(path.join(__dirname, '../..', 'app/public/home.html'));
    res.sendFile(path.join(__dirname, '../..', 'app/public/home.html'));
});

// SURVEY
htmlrouter.get('/survey', function(req, res){
    console.log(path.join(__dirname, '../..', 'app/public/survey.html'));
    res.sendFile(path.join(__dirname, '../..', 'app/public/survey.html'));
});

//catch-all
htmlrouter.get("*", function(req, res){
    res.redirect('/');
});

module.exports = htmlrouter;