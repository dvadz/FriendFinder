var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

app.get('/', function(req, res){
    res.send("WELCOME TO FRIENDFINDER");
});

app.listen(PORT, function(){
    console.log(`Friendfinder is running on PORT ${PORT}`);
});

