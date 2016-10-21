app.controller('questionController', ['$scope', '$location', 'userFactory', 'questionFactory', function($scope, $location, userFactory, questionFactory){

	var sync = function(){
		questionFactory.sync(function(data){
			$scope.questions = data;
		})
	}

	if(!userFactory.cookieJar.check()){
		$location.url('/index');
	}

	else{
		userFactory.cookieJar.sync(function(data){
			$scope.user = data[0];
		});
	}

	$scope.user = {};
	$scope.errors = {};
	$scope.question = {};

	$scope.logout = function(){
		userFactory.cookieJar.clear();
		if(!userFactory.cookieJar.check()){
		$location.url('/index');
		}
	}

	$scope.addQuestion = function(){
		console.log('adder');
		questionFactory.create($scope.question, function(data){
			if(data.errors){
				$scope.errors = data.errors;
			}
			else{
				$scope.question = data;
				$location.url('/');
			}
		})

	}
}]);