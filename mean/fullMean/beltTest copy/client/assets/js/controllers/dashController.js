app.controller('dashController', ['$scope', '$location', 'userFactory', 'questionFactory' , function($scope, $location, userFactory, questionFactory){

	if(!userFactory.cookieJar.check()){
		$location.url('/index');
	}

	else{
		userFactory.cookieJar.sync(function(data){
			$scope.user = data[0];
		});
		questionFactory.sync(function(data){
			console.log('front-end controller')
			$scope.questions = data;
		});
	}

	$scope.user = {};
	$scope.questions = {};

	$scope.show = function(id){
		questionFactory.set(id, function(data){
			console.log(data);
			$location.url('question/'+id);
		});
		
	}
	

	$scope.logout = function(){
		userFactory.cookieJar.clear();
		if(!userFactory.cookieJar.check()){
		$location.url('/index');
		}
	}

}]);