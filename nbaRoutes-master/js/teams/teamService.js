
var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	
	this.addNewGame = function(gameObj) {
		parseInt(gameObj.homeTeamScore);
		parseInt(gameObj.opponentTeamScore);
		console.log(gameObj.homeTeamScore);
		console.log(gameObj.opponentTeamScore);
		gameObj.won = true; 
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		if (gameObj.homeTeamScore > gameObj.opponentTeamScore) {
		  	gameObj.won = true; 
		} else {
		  	gameObj.won = false; 
		}

     return $http({
        method: 'POST',
        url: url,
        data: gameObj

        })
 };

     this.getTeamData = function(team) {

     var dfr = $q.defer(); {

     var url = "https://api.parse.com/1/classes/" + team; 
     $http.get(url)
     	.then(function(data){
     		var results = data.data.results
     		var wins = 0;
     		var losses = 0;
     	for (var i = 0; i < results.length; i++) {
     		if (results[i].won === true ) {
     			wins++
     		
     	} else { //closes if statment
     			losses++
     	} // closes else

     		results.wins = wins; 
     		results.losses = losses; 
     	} //closes forloop
     	console.log(results);
     	dfr.resolve(results)
     }) // closes .then
return(dfr.promise);
 } //end defer

}; //get team data function

}); //ends app service parens and function










