app.controller('DetailsController', function($scope, DataService, $routeParams){

var peopleIndex = $routeParams.peopleId; 

$scope.name = DataService.data[peopleIndex].name; 
$scope.description = DataService.data[peopleIndex].description;  

});