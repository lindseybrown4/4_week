var app = angular.module('pokemonApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

	.when ('/', {
		templateUrl: 'js/directives/pokeTemplate.html',
		controller: 'pokeCtrl'
	})

    .otherwise({
      redirectTo: '/'
    })
}); 


