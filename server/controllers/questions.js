var mongoose= require('mongoose'); 
//require all schema in models
var User= mongoose.model('User'); 
var answer= mongoose.model('Answer');
var question= mongoose.model('Question');


module.exports= {
	create_question : function (req, res){
			// console.log(req.body);
			var questionTBS= new question({
				question:req.body.questions, 
				description:req.body.descriptions,
				_user:req.body.username
			})
			questionTBS.save(function(err, result){
				if (err){
					res.json("Must be at least 10 character long")
				}else{
					res.json(result);
				}	
			})
	},
	index: function(req, res){
		question.find({}).sort({created_at: -1}).exec(function(err, questions){
			res.json(questions);
		})

	},
	get_question: function(req, res){
		question.findOne({_id: req.params.id}).populate('_answers').exec(function(err, result){
			res.json(result);

		})
	},
	delete_question: function(req, res){
		question.remove({_id: req.params.id}, function(err, result){
			res.json(true);
		})
	},
	create_answer : function (req, res){
		var answerTBS= new answer(req.body);
		answerTBS.save(function(err, result){
			question.findById(req.body._question, function(err, question){
				question._answers.push(answerTBS);
				question.save(function(err, question){
					if (err){
					res.json("Must be at least 5 character long")
				}else{
					res.json(question);
				}
				})
			})
		})
	},
	display_answer:function(req, res){
		answer.findOne({_id: req.params.id}).populate('_question').exec(function(err, result){
			if (err){
				res.json(err);
			}else{
				res.json(result);
			}
			
		})
	},
	likes: function(req, res) {
    	answer.update({ _id: req.params.id },{ $inc : { likes: 1 } },function(err, result) {
    		if (err){
    			res.send(err)
    		}else{
    			res.send(result);
    		}
        	
      });
  	},



	
}