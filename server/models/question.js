var mongoose= require('mongoose'); 

var questionSchema = new mongoose.Schema({
	question: { type: String, required: true, minlength: 10},
	description: String, 
	//foreign key to associate  answer with question
	_user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
	_answers:[{type:mongoose.Schema.Types.ObjectId, ref:'Answer'}],
	created_at: {type: Date, default: Date.now }
})
//create a user model based on the above schema
mongoose.model('Question', questionSchema);