app.factory('questionFactory', ['$http', function($http){

	var savedQuestion;

	function QuestionFactory(){
		this.sync = function(callback){
			console.log('factory Start')
			$http.get('/questions').then(function(returnData){
					callback(returnData.data)
			});
		}

		this.find = function(callback){
			$http.get('/question')
		}

		this.create = function(question, callback){
			$http.post('/questions', question).then(function(returnData){
				console.log(returnData.data)
				callback(returnData.data);
			});
		}

		this.set = function(question, callback){
			$http.get('/onequestion/'+question).then(function(returnData){
				console.log('done');
				if(returnData.data.errors){
					console.log(returnData.data.errors);
				}
				else{
					savedQuestion = returnData.data;
					callback(savedQuestion);
				}
			});
		}

		this.one = function(callback){
			callback(savedQuestion);
		}

	}
	return new QuestionFactory();
}]);
		
		