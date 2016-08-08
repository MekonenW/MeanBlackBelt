var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser"); //enables post data
app.use(bodyParser.json());

app.use( express.static( path.join(__dirname, 'client' )));
app.use( express.static( path.join(__dirname, 'bower_components' )));


require(__dirname +'/server/config/mongoose'); //Connect to Mongoose, now models is up and running
require(__dirname +'/server/config/routes')(app); // returns routes.js function

app.listen(8000, function() {
  console.log("Server running on port 8000");
})