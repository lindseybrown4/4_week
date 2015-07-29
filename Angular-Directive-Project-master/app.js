var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

	.when ('/home', { 
		templateUrl: 'home/homeTemplate.html',
		controller: 'homeCtrl'

	}) // end .when function

	

	.otherwise({
      redirectTo: '/home'
    })


}); //end app.config function
