app.controller('topicController', ['$scope', '$location', 'userFactory', 'topicFactory', 'postFactory', 'commentFactory', function($scope, $location, userFactory, topicFactory, postFactory, commentFactory){

	if(!userFactory.cookieJar.check()){
		$location.url('/');
	}

	else{
		userFactory.cookieJar.sync(function(data){
			$scope.user = data;
			console.log($scope.user);
			topicFactory.current(function(data){
				$scope.topic = data;
			});
		});
	}

	$scope.user = {};
	$scope.topic = {};
	$scope.post = {};
	$scope.comment = {};
	$scope.side = [];

	$scope.addPost = function(){
		console.log('addPost')
		$scope.post.topic = $scope.topic._id;
		$scope.post.user = $scope.user._id;
		postFactory.create($scope.post, function(data){
			console.log(data);
			topicFactory.set(data._id, function(data){
				$scope.topic = data;
			});
		});
	}

	$scope.addComment = function(idx, postId){
		console.log($scope.side);
		$scope.comment.comment = $scope.side[idx];
		console.log(postId);
		$scope.comment.post = postId;
		$scope.comment.user = $scope.user._id;
		console.log($scope.comment);
		commentFactory.create($scope.comment, function(data){
			console.log(data);
			topicFactory.set($scope.topic._id, function(data){
				$scope.topic = data;
			});
		});
	}

	$scope.upVote = function(id){
		postFactory.vote(id, {
			user:$scope.user._id, 
			bool:true
		});
		topicFactory.set($scope.topic._id, function(data){
			$scope.topic = data;
		});
	}

	$scope.downVote = function(id){
		postFactory.vote(id, {
			user:$scope.user._id, 
			bool:false
		});
		topicFactory.set($scope.topic._id, function(data){
			$scope.topic = data;
		});
	}

	$scope.showUser = function(id){
		userFactory.set(id, function(data){
			if(data.errors)$scope.errors = data.errors;
			$location.url('/user/'+id);
		})
	}

	$scope.logout = function(){
		userFactory.cookieJar.clear();
		if(!userFactory.cookieJar.check()){
			$location.url('/');
		}
	}


}]);