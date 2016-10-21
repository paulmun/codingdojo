app.factory('postFactory', ['$http', function($http){

	function PostFactory(){

		this.create = function(post, callback){
			$http.post('/posts', post).then(function(returnData){
				console.log(returnData.data)
				callback(returnData.data);
			});
		}

		this.vote = function(post, user){
			console.log('factory')
			$http.put('/posts/'+post, user)
		}

	}
	return new PostFactory();
}]);
		
		