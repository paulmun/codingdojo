app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory){
	
	$scope.addFriend = function(){
		friendsFactory.create($scope.friend, function(data){
			$scope.newFriend = data;
		});
		$scope.friend = {};
		$location.url('/');
	}
}]);

app.controller('editController', ['$scope', '$routeParams', '$location', 'friendsFactory', function($scope, $routeParams, $location, friendsFactory){
	friendsFactory.show($routeParams.id, function(data){
		$scope.friend = data;
		$scope.friend.birthday = new Date($scope.friend.birthday);
	});

	$scope.editFriend = function(){
		friendsFactory.update($scope.friend._id, $scope.friend);
		$location.url('/show/'+$scope.friend._id);
	}

	$scope.deleteFriend = function(){

	}
}]);

app.controller('showController', ['$scope', '$routeParams', '$location', 'friendsFactory', function($scope, $routeParams, $location, friendsFactory){
	$scope.friend = {};
	friendsFactory.show($routeParams.id, function(data){
		$scope.friend = data;
		$scope.friend.birthday = new Date($scope.friend.birthday);
		$scope.friend.created_on = new Date($scope.friend.created_on);
	});
}]);

app.controller('indexController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory){
	friendsFactory.index(function(data){
		$scope.friends = data;
	});

	$scope.birthdayFilter = ''
	$scope.birthday = new Date($scope.birthdayFilter);

	$scope.deleteFriend = function(id){
		friendsFactory.delete(id, function(data){
			$scope.friends = data; 
		});
	};

}])