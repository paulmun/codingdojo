app.controller('userController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

	if(!userFactory.cookieJar.check()){
		$location.url('/');
	}

	else{
		userFactory.cookieJar.sync(function(data){
			console.log('grabbing');
			$scope.user = data;
			console.log($scope.user);
			userFactory.syncPage(function(data){
				$scope.userPage = data;
				console.log($scope.userPage);
			});
		});


	}

	$scope.user = {};
	$scope.userPage = {};
	$scope.topics = [];
	$scope.topic = {};

	$scope.logout = function(){
		userFactory.cookieJar.clear();
		if(!userFactory.cookieJar.check()){
		$location.url('/');
		}
	}
}]);