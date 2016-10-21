app.factory('commentFactory', ['$http', function($http){

	function CommentFactory(){

		this.create = function(comment, callback){
			$http.post('/comments', comment).then(function(returnData){
				console.log(returnData.data)
				callback(returnData.data);
			});
		}

	}
	return new CommentFactory();
}]);
		
		