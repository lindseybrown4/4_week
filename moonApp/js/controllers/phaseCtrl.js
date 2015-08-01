app.controller('phaseCtrl', function($scope, phaseService){

	//$scope.phase = phaseService.getPhase(); 

	$scope.getPhase = function() {
		phaseService.getPhase($scope.currentDate).then(function(res) {
			$scope.moonInfo = res;
		});
	};

});