app.controller('userController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){
	$scope.users = {};

	$scope.addUser = function(){
		userFactory.create({name: $scope.name}, function(data){
			console.log(data);
			$scope.errors = {};
			if(data.data.errors){
				$scope.errors = data.data.errors;
			}
			else{
			}
		});
	}

	$scope.removeUser = function(id){
		userFactory.destroy(id, function(data){
			console.log(data);
		});
	}
}]);