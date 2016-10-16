var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/index.html',
		controller: 'indexController'
	})
	.when('/login', {
		templateUrl: '/partials/login.html',
		controller: 'loginController'
	})
	.when('/register', {
		templateUrl: '/partials/register.html',
		controller: 'registerController'
	})
	.when('/success', {
		templateUrl: '/partials/success.html',
		controller: 'successController'
	})
	.otherwise('/')
})