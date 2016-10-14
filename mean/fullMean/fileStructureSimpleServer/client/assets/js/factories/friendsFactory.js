app.factory('friendsFactory', ['$http', function($http){
	
	var friends = [],
		friend = {};

	function FriendsFactory(){

		this.create = function(newfriend, callback){
			$http.post('/friends', newfriend).then(function(returned_data){
				console.log(returned_data.data);
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			})
		}

		this.update = function(id, friend){
			console.log(id);
			$http.put('/friends/'+id, friend).then(
				function(returned_data){
					updated = returned_data.data;
					console.log(updated);
				})
		}

		this.index = function(callback){
			$http.get('/friends').then(function(returned_data){
				console.log(returned_data.data);
				friends = returned_data.data;
				callback(friends);
			});
		}

		this.delete = function(id, callback){
			console.log(id)
			$http.delete('/friends/'+id).then(function(returned_data){
				deleted = returned_data.data;
				console.log(returned_data)
				callback(deleted);
			})
		}

		this.show = function(id, callback){
			$http.get('/friends/'+id).then(function(returned_data){
				friend = returned_data.data;
				callback(friend);
			});
		}

		this.getFriends = function(callback){
			callback(friends);
		}
	}
	return new FriendsFactory();
}]);