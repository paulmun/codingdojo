app = angular.module('app', ['ngRoute', 'ngMessages'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/index.html',
		controller: 'indexController'
	}
})