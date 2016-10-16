app.controller('indexController', ['$scope', '$location', 'loginFactory', function($scope, $location, loginFactory){

	if(loginFactory.cookieJar.check()){
		$location.url('success');
	}

	$scope.loginRoute = function(){
		console.log('chicken')
		$location.url('/login');
	}

	$scope.registerRoute = function(){
		console.log('beef')
		$location.url('/register');
	}

}]);

app.controller('loginController', ['$scope', '$location', '$cookies', 'loginFactory', function($scope, $location,  $cookies, loginFactory){

	if(loginFactory.cookieJar.check()){
		$location.url('/success');
	}
	
	$scope.login = function(){
		loginFactory.show($scope.user,
			function(data){
				$scope.currentUser = data
			}
		);
		$scope.user = {};
		$location.url('/success');
	}
}]);

app.controller('registerController', ['$scope', '$location', 'loginFactory', function($scope, $location, loginFactory){

	if(loginFactory.cookieJar.check()){
		$location.url('/success');
	}

	$scope.register = function(){
		console.log('Front-end Controller');
		if($scope.user.password.length > 7 && $scope.user.password === $scope.user.confirmPassword){
			loginFactory.create($scope.user, 
				function(data){
					$scope.newUser = data;
				}
			);
			$scope.user = {};
			$location.url('/success');
		}
		else{}
		
	}	
}]);

app.controller('successController', ['$scope', '$location', 'loginFactory', function($scope, $location, loginFactory){

	if(!loginFactory.cookieJar.check()){
		$location.url('/');
	}
	loginFactory.cookieJar.sync(function(data){
		$scope.user = data;
	})

	$scope.logout = function(){
		loginFactory.cookieJar.clear();
		$location.url('/');
	}

}]);