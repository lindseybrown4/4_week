app.service('phaseService', function($http, $q){

	// var handleResponse = function(webResponse) {
	// 	return webResponse.data;
	// };

	this.getPhase = function(date) {

		var url = 'http://api.burningsoul.in/moon/' + date;
		var deferred = $q.defer();
		
		$http.get(url)
		  .then(function(response) {
		    	console.log(response.data);
		    	deferred.resolve(response.data);
		  }, function(error) {
		    	console.log(error);
		  });
		  return deferred.promise;
	};

});