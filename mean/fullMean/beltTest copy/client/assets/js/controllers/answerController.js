app.controller('answerController', ['$scope', '$location', 'userFactory', 'questionFactory', 'answerFactory', function($scope, $location, userFactory, questionFactory, answerFactory){

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

	$scope.addAnswer = function(){
		console.log('adder');
		answerFactory.create($scope.question._id, $scope.answer, $scope.user._id, function(data){
			if(data.errors){
				$scope.errors = data.errors;
			}
			else{
				$scope.question = data;
				$location.url('/question/'+question._id);
			}
		});

	}
}]);