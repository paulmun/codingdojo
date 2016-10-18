app.factory('userFactory', ['$http', function($http){
	var user = {};

	function UserFactory(){
		this.create = function(user, callback){
			$http.post('/users', user).then(function(returnData){
				callback(returnData.data);
			});
		}
		this.destroy = function(id, callback){
			$http.delete('/users/'+id).then(function(returnData){
				callback(returnData.data);
			});
		}
		this.sync = function(callback){
			$http.get('/users').then( function(returnData){
				callback(returnData.data);
			});
		}
	}

	return new UserFactory();

}]);