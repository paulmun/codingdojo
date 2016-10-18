app.controller('userController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

	userFactory.sync(function(data){
		$scope.users = data;
		console.log(data);
	})

	$scope.addUser = function(){
		userFactory.create({name: $scope.name}, function(data){
			console.log(data);
			$scope.errors = {};
			if(data.errors){
				$scope.errors = data.errors;
			}
			else{
				$scope.users = data;
			}
		});
	}

	$scope.removeUser = function(id){
		userFactory.destroy(id, function(data){
			$scope.users = data;
		});
	}
}]);