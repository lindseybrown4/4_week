"use strict"; 

app.controller('mainCtr', function($scope, pokeService){

//############################################################
// Version 1:
//############################################################

	// var getData = function() {
	// 	return pokeService.getData();
	// }; 

	// $scope.pokemon = getData();

//############################################################
// Version 2:
//############################################################
	// $scope.pokemon = pokeService.pokemon;

//############################################################
// Version 3:
//############################################################
	
	$scope.getData = function() {
		$scope.pokemon = pokeService.getData();
	}; 

}); 