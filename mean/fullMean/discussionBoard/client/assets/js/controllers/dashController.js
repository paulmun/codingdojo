app.controller('dashController', ['$scope', '$location', 'userFactory', 'topicFactory' , function($scope, $location, userFactory, topicFactory){

	if(!userFactory.cookieJar.check()){
		$location.url('/');
	}

	else{
		userFactory.cookieJar.sync(function(data){
			console.log('grabbing');
			$scope.user = data;
			console.log($scope.user);
		});
		topicFactory.sync(function(data){
			console.log('front-end controller')
			$scope.topics = data;
		});
	}

	$scope.user = {};
	$scope.topics = [];
	$scope.topic = {};

	$scope.addTopic = function(){
		console.log($scope.topic.user)
		$scope.topic.user = $scope.user._id;
		topicFactory.create($scope.topic, function(data){
			if(data.errors)$scope.errors = data.errors;
			topicFactory.sync(function(data){
				console.log('front-end controller')
				$scope.topics = data;
			});
		})
	}

	$scope.show = function(id){
		topicFactory.set(id, function(data){
			if(data.errors)$scope.errors = data.errors;
			$location.url('/topic/'+id);
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