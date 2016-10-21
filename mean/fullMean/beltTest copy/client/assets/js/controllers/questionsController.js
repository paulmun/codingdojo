app.controller('questionsController', ['$scope', '$location', 'userFactory', 'questionFactory', function($scope, $location, userFactory, questionFactory){

	$scope.user = {};
	$scope.errors = {};
	$scope.question = {};

	if(!userFactory.cookieJar.check()){
		$location.url('/index');
	}
	userFactory.cookieJar.sync(function(data){
		$scope.user = data[0];
		console.log('HELLO')
	});
	questionFactory.one(function(data){
		$scope.question = data;
		console.log($scope.question);
	});


	

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
		});

	}
}]);