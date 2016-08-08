var mongoose= require('mongoose'); 

var answerSchema = new mongoose.Schema({
	name:String,
	answer: { type: String, required: true, minlength: 5},
	description: String, 
	likes: {type:Number, default:0},
	_user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
	_question:{type:mongoose.Schema.Types.ObjectId, ref:'Question'},
	created_at: {type: Date, default: Date.now }

})
//create a user model based on the above schema
mongoose.model('Answer', answerSchema);