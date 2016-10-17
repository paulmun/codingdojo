app.controller('indexController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

	if(userFactory.check()){
		$location.url('/wall');
	};

	$scope.login = function(){
		console.log($scope.user);
		userFactory.show($scope.user, function(data){
			console.log(data);
		});
		$location.url('/wall');
	}

}]);

app.controller('wallController', ['$scope', '$location', 'userFactory', 'wallFactory', function($scope, $location, userFactory, wallFactory){

	console.log('wallController');
	
	var user;
	console.log(user);
	if(!userFactory.check()){
		$location.url('/');
	};

	$scope.messages;

	wallFactory.sync(function(data){
		$scope.messages = data;
		console.log($scope.messages)
	});

	userFactory.sync(function(data){
		user = data;
	})
	console.log(user);

	$scope.signout = function(){
		userFactory.clear();
		$location.url('/');
	};

	$scope.createMessage = function(){
		wallFactory.createMessage({name: user.name, content: $scope.message}, function(data){
			console.log(data);
		});
		wallFactory.sync(function(data){
			$scope.messages = data;
		});
		$scope.message = '';

	};

	$scope.createComment = function(idx){
		console.log($scope.messages[idx].new)
		wallFactory.createComment({id: $scope.messages[idx]._id, name: user.name, content: $scope.messages[idx].new}, function(data){
			console.log(data);
			});
		wallFactory.sync(function(data){
			$scope.messages = data;
		});
	};
}]);