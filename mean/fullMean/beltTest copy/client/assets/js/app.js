app = angular.module('app', ['ngRoute', 
	'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/dashboard.html',
		controller: 'dashController'
	})
	.when('/index', {
		templateUrl: '/partials/index.html',
		controller: 'userController'
	})
	.when('/new_question', {
		templateUrl: '/partials/newQuestion.html',
		controller: 'questionController'
	})
	.when('/question/:id', {
		templateUrl: '/partials/question.html',
		controller: 'questionsController'
	})
	.when('/question/:id/new_answer', {
		templateUrl: '/partials/newAnswer.html',
		controller: 'answerController'
	})
	.otherwise('/');
})