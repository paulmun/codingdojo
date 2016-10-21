app.factory('topicFactory', ['$http', function($http){

	var savedTopic;

	function TopicFactory(){
		this.sync = function(callback){
			$http.get('/topics').then(function(returnData){
					callback(returnData.data)
			});
		}

		this.find = function(callback){
			$http.get('/topic')
		}

		this.create = function(topic, callback){
			$http.post('/topics', topic).then(function(returnData){
				console.log(returnData.data)
				callback(returnData.data);
			});
		}

		this.set = function(topic, callback){
			$http.get('/topic/'+topic).then(function(returnData){
				console.log(returnData.data);
				if(returnData.data.errors){
					console.log(returnData.data.errors);
				}
				else{
					savedTopic = returnData.data;
					callback(savedTopic);
				}
			});
		}

		this.current = function(callback){
			callback(savedTopic);
		}

		

	}
	return new TopicFactory();
}]);
		
		