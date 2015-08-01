var app = angular.module('moonApp', []); 

app.config(function($routeProvider){

	$routeProvider

		.when('/home', {
			templateUrl: "/views/home.html",
			controller: 'homeCtrl.js'
		}) 

		.when('/views/:moon', {
			templateUrl:'/views/moon.html'
			controller: 'moonCtrl'
		})

		.when('/views/:phase', {
			templateUrl: '/views/phase.html'
			controller: 'phaseCtrl'
		})

		.otherwise({
			redirectTo: '/home'
		})

})


	