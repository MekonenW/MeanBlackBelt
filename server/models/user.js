var mongoose= require('mongoose'); 
//create schema
var UserSchema= new mongoose.Schema({
	username: String,

})
//create User model based on this schema
mongoose.model('User', UserSchema);
