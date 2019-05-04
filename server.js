var express = require("express");
var path = require("path");
var fs = require("fs");
var PORT = process.env.PORT || 3000;

var htmlrouter = require('./app/routing/htmlRoutes.js');
var apirouter = require('./app/routing/apiRoutes.js');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(apirouter);
app.use(htmlrouter);

app.listen(PORT, function(){
    console.log(`Friendfinder is running on PORT ${PORT}`);
});

// =========================================================

function serveHTML(file, res){
    fs.readFile(path.join(__dirname, file), function(err, data){
        if(err) throw err;

        res.end(data);
        console.log(__dirname + file);
    });
}


