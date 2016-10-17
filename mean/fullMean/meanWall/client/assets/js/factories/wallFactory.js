app.factory('userFactory', ['$http', function($http){
	var user = {};

	function UserFactory(){
		this.show = function(name, callback){
			console.log('userFactory');
			$http.post('/users', name).then(
				function(returnedData){
					console.log(returnedData);
					user = returnedData.data;
					callback(user);
			})
		}
		
		this.check = function(){
			if(user.name){
				console.log(user);
				return true;
			}
			else{
				console.log(user);
				return false;
			}
		}
		
		this.clear = function(){
			user = {};
		}

		this.sync = function(callback){
			callback(user);
		}
	}

	return new UserFactory();
}]);

app.factory('wallFactory', ['$http', function($http){

	function WallFactory(){
		this.sync = function(callback){
			$http.get('/messages').then(
				function(returnedData){
					callback(returnedData.data);		
				}
			);
		}

		this.createMessage = function(message, callback){
			console.log(message.name);
			$http.post('/messages', message).then( 
				function(returnedData){
					callback(returnedData);
				}
			);
		}

		this.createComment = function(message, callback){
			$http.put('/messages/'+message.id, message).then(
				function(returnedData){
					callback(returnedData.data);
				}
			);
		}
	}

	return new WallFactory();

}]);