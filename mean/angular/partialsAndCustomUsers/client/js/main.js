var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(function($routeProvider){
		$routeProvider
		.when('/customize',{
			templateUrl: 'views/partials/customize.html'
		})
		.when('/users', {
			templateUrl: 'views/partials/users.html'
		})
		.otherwise({
			redirectTo: '/'
		})
	})

	myApp.factory('userFactory', function(){
		return{
			users : [],
			create : function(firstName, lastName, favoriteLanguage){
				this.users.push({
				firstName: firstName,
				lastName: lastName,
				favoriteLanguage:favoriteLanguage,
				})},
			sync : function(callback){
				callback(this.users);
			},
			destroy : function(index){
				this.users.splice(index, 1);
			},

			
		}
	})

	myApp.controller('customizeController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location){
		$scope.users = [];
		$scope.sync = function(users){
			$scope.users = users;
		}
		userFactory.sync($scope.sync);

		$scope.addUser = function(){
			userFactory.create($scope.firstName, $scope.lastName, $scope.favoriteLanguage
			);
			$scope.firstName = '';
			$scope.lastName = '';
			$scope.favoriteLanguage = '';
			$location.url('/users');
		}

		$scope.destroy = function(index){
			userFactory.destroy(index);
		}
	}]);

	myApp.controller('userController', ['$scope', 'userFactory', function($scope, userFactory){
		$scope.users = [];

		$scope.sync = function(users){
			$scope.users = users;
		}

		userFactory.sync($scope.sync);
		}

	]);
