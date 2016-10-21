app.controller('userController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

	if(userFactory.cookieJar.check()){
		$location.url('/');
	}

	$scope.user = {};
	$scope.errors = {};

	$scope.test = function(){
		console.log('test');
	}

	$scope.addUser = function(){
		console.log($scope.user);
		userFactory.create($scope.user, function(data){
			if(data.errors){
				$scope.errors = data.errors;
			}
			else{
				$scope.user = data
				$location.url('/');
			}
		});
	}
}]);