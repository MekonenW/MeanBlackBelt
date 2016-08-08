//responsible for connecting to the database and loading up the files in models

var mongoose= require('mongoose'); 
mongoose.connect('mongodb://localhost/OptionC'); 

//after connecting to database require the files in models


require(__dirname + '/../models/question');
require(__dirname + '/../models/answer');
require(__dirname + '/../models/user');
