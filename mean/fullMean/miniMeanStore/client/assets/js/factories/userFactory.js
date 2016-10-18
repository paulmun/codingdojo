app.factory('userFactory', ['$http', function($http){
	var user = {};

	function UserFactory(){
		this.create = function(user, callback){
			$http.post('/users', user).then(function(data){
				callback(data);
			});
		}
		this.destroy = function(id, callback){
			$http.delete('/users/'+id).then(function(returnData){
				callback(returnData);
			})
		}
	}

	return new UserFactory();

}]);