app.controller('phaseCtrl', function($scope, phaseService){

	$scope.getPhase = function() {
		phaseService.getPhase(($scope.currentDate.getTime()) /1000).then(function(res) {
			$scope.moonInfo = res;
		});
	};

});