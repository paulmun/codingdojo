app = angular.module('app', ['ngRoute', 
	'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/index.html',
		controller: 'indexController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dash.html',
		controller: 'dashController'
	})
	.when('/topic/:id', {
		templateUrl: 'partials/topic.html',
		controller: 'topicController'
	})
	.when('/user/:id', {
		templateUrl: 'partials/user.html',
		controller: 'userController'
	})
	.otherwise('/');
})