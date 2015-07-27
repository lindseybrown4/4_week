app.controller('ListController', function($scope, DataService, $location){
	$scope.doIWork = "yes I do"; 

	$scope.people = DataService.data;

	$scope.updateRoute = function(index){
		$location.path('/people/' + index);
	}
});
