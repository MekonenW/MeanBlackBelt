//invoke controllers into routes
var questions= require(__dirname + '/../controllers/questions'); 
var Users= require(__dirname + '/../controllers/users'); 


module.exports= function(app){
	app.post('/users', Users.create); 
	app.post('/questions', questions.create_question);
	app.get('/questions', questions.index);
	app.get('/answers/:id', questions.get_question);
	app.post('/answers', questions.create_answer);
	app.put('/answers/:id', questions.likes);
	app.get('/answers/:id', questions.display_answer)
	app.delete('/questions/:id', questions.delete_question);
}