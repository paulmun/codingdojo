app.controller('userController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

	var sync = function(){
		userFactory.sync(function(data){
		$scope.users = data;
		});
	}

	sync();

	$scope.addUser = function(){
		userFactory.create({name: $scope.name}, function(data){
			$scope.errors = {};
			if(data.errors){
				$scope.errors = data.errors;
			}
			else{
				$scope.user = data
				sync();
			}
		});
	}

	$scope.removeUser = function(id){
		userFactory.destroy(id, function(data){
			if(data.errors){
				$scope.errors = data.errors;
			}
			else{
				sync();
			}
		});
	}
}]);