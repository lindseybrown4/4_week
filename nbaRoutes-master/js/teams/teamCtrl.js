var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

  $scope.teamData = teamData;

  $scope.newGame = {}

  $scope.showNewGameForm = false; 
});