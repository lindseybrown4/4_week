var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function(routeProvider){

	routeProvider

	.when('/people', {
		templateUrl: 'app/templates/list_template.html',
		controller: 'ListController'		

	})

	.when('/people/:peopleId', {
		templateUrl: 'app/templates/details_template.html',
		controller: 'DetailsController'		

	})

	}])
