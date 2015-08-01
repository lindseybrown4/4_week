var app = angular.module('moonApp', ['ngRoute']); 

app.config(function($routeProvider){

	$routeProvider

		.when('/home', {
			templateUrl: "/views/home.html",
			controller: 'homeCtrl'
		}) 

		.when('/views/:phase', {
			templateUrl: '/views/phase.html',
			controller: 'phaseCtrl'
		})

		.otherwise({
			redirectTo: '/home'
		})

})


	