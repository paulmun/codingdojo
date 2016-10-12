var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(function($routeProvider){
		$routeProvider
		.when('/players',{
			templateUrl: 'views/partials/players.html'
		})
		.when('/teams', {
			templateUrl: 'views/partials/teams.html'
		})
		.when('/associations', {
			templateUrl: 'views/partials/associations.html'
		})
		.otherwise({
			redirectTo: '/'
		})
	})

	myApp.factory('playerFactory', function(){
		return{
			players: [{name:'paul',team:''},{name:'christian',team:''}],
			create: function(name){
				this.players.push({
					name: name,
					team: ''
				})
			},
			destroy: function(index){
				this.players.splice(index,1);
			},
			clearAssignment: function(index){
				this.players[index].team = '';
			},
			sync: function(callback){
				callback(this.players);
			},
			assign: function(player,team){
				this.players[player].team = team;
			}
		}
	});

	myApp.factory('teamFactory',function(){
		return{
			teams: [{teamName:'Seahawks'},{teamName:'49ers'}],
			create: function(name){
				this.teams.push({
					teamName: name,
				})
			},
			destroy: function(index){
				this.teams.splice(index, 1);
			},
			sync: function(callback){
				callback(this.teams);
			}
		}
	});

	myApp.controller('PlayersController', ['$scope', 'playerFactory', '$location', function($scope, playerFactory, $location){
			$scope.players = [];
			playerFactory.sync(function(players){$scope.players = players;});

			$scope.add = function(){
				playerFactory.create($scope.name)
				$scope.name = '';
			}
			$scope.remove = function(index){
				playerFactory.destroy(index);
			}
	}]);

	myApp.controller('TeamsController', ['$scope', 'teamFactory', function($scope, teamFactory){
		$scope.teams = [];
		teamFactory.sync(function(teams){$scope.teams = teams;});

		$scope.add = function(){
			teamFactory.create($scope.teamName)
			$scope.teamName = '';
		}
		$scope.remove = function(index){
			teamFactory.destroy(index);
		}
	}]);

	myApp.controller('AssociationsController', ['$scope', 'teamFactory', 'playerFactory', function($scope, teamFactory, playerFactory){
		$scope.players = [];
		playerFactory.sync(function(players){$scope.players = players;});

		$scope.teams = [];
		teamFactory.sync(function(teams){$scope.teams = teams;});

		$scope.clearAssignment = function(index){
			playerFactory.clearAssignment(index);
		}

		$scope.assign = function(){
			playerFactory.assign($scope.playerIndex, $scope.teamIndex);
			$scope.playerIndex = '';
			$scope.teamIndex = '';
		}
	}]);
