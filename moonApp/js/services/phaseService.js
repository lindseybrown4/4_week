


app.service('phaseService', function($http, $q){

	// var handleResponse = function(webResponse) {
	// 	return webResponse.data;
	// };

	// this.getPhase = function(date) {

	// 	var url = 'http://api.burningsoul.in/moon/' + date;
	// 	var deferred = $q.defer();
		
	// 	$http.get(url)
	// 	  .then(function(response) {
	// 	    	console.log(response);
	// 	    	var moonData = response.data;
	// 	    	for (var i = 0; i < moonPictures.length; i++) {
	// 	    		if (Math.round(moonData.age) === moonPictures[i].day) {
	// 	    			moonData.picture = moonPictures[i].url; 
	// 	    		}
	// 			}
	// 			deferred.resolve(moonData);
	// 			console.log(moonData);
	// 	  }, function(error) {
	// 	    	console.log(error);
	// 	  });
	// 	  return deferred.promise;
	// };

// #################################################
	// this.getPhase = function(date) {

	// 	var url = 'http://api.burningsoul.in/moon/' + date;
		
	// 	return $http.get(url)
	// 	  .then(function(response) {
	// 	    	console.log(response);
	// 	    	var moonData = response.data;
	// 	    	for (var i = 0; i < moonPictures.length; i++) {
	// 	    		if (Math.round(moonData.age) === moonPictures[i].day) {
	// 	    			moonData.picture = moonPictures[i].url; 
	// 	    		}
	// 			}
	// 			return moonData;
	// 	  }, function(error) {
	// 	    	console.log(error);
	// 	  });
	// };
// ###################################################
	this.getPhase = function(date) {

		var url = 'http://api.burningsoul.in/moon/' + date;
		
		var promise = $http.get(url)
		  .then(function(response) {
		    	console.log(response);
		    	var moonData = response.data;
		    	for (var i = 0; i < moonPictures.length; i++) {
		    		if (Math.round(moonData.age) === moonPictures[i].day) {
		    			moonData.picture = moonPictures[i].url; 
		    		}
				}
				shortTime(moonData);
				return moonData;
		  }, function(error) {
		    	console.log(error);
		  });
		  return promise;
	};

	var shortTime = function(obj) {
		obj.NNM.DT = obj.NNM.DT.slice(9); 
		obj.FM.DT = obj.FM.DT.slice(9);
	};

	var moonPictures = [
		{"day":0, "url":"http://www.imooncal.com/cs/i/1_m0.jpg" },
		{"day":1, "url":"http://www.imooncal.com/cs/i/1_m2.jpg" },
		{"day":2, "url":"http://www.imooncal.com/cs/i/1_m3.jpg" },
		{"day":3, "url":"http://www.imooncal.com/cs/i/1_m4.jpg" },
		{"day":4, "url":"http://www.imooncal.com/cs/i/1_m5.jpg" },
		{"day":5, "url":"http://www.imooncal.com/cs/i/1_m6.jpg" },
		{"day":6, "url":"http://www.imooncal.com/cs/i/1_m7.jpg" },
		{"day":7, "url":"http://www.imooncal.com/cs/i/1_m8.jpg" },
		{"day":8, "url":"http://www.imooncal.com/cs/i/1_m9.jpg" },
		{"day":9, "url":"http://www.imooncal.com/cs/i/1_m10.jpg" },
		{"day":10, "url":"http://www.imooncal.com/cs/i/1_m11.jpg" },
		{"day":11, "url":"http://www.imooncal.com/cs/i/1_m12.jpg" },
		{"day":12, "url":"http://www.imooncal.com/cs/i/1_m13.jpg" },
		{"day":13, "url":"http://www.imooncal.com/cs/i/1_m14.jpg" },
		{"day":14, "url":"http://www.imooncal.com/cs/i/1_m15.jpg" },
		{"day":15, "url":"http://www.imooncal.com/cs/i/1_m16.jpg" },
		{"day":16, "url":"http://www.imooncal.com/cs/i/1_m17.jpg" },
		{"day":17, "url":"http://www.imooncal.com/cs/i/1_m18.jpg" },
		{"day":18, "url":"http://www.imooncal.com/cs/i/1_m19.jpg" },
		{"day":19, "url":"http://www.imooncal.com/cs/i/1_m20.jpg" },
		{"day":20, "url":"http://www.imooncal.com/cs/i/1_m21.jpg" },
		{"day":21, "url":"http://www.imooncal.com/cs/i/1_m22.jpg" },
		{"day":22, "url":"http://www.imooncal.com/cs/i/1_m23.jpg" },
		{"day":23, "url":"http://www.imooncal.com/cs/i/1_m24.jpg" },
		{"day":24, "url":"http://www.imooncal.com/cs/i/1_m25.jpg" },
		{"day":25, "url":"http://www.imooncal.com/cs/i/1_m26.jpg" },
		{"day":26, "url":"http://www.imooncal.com/cs/i/1_m27.jpg" },
		{"day":27, "url":"http://www.imooncal.com/cs/i/1_m28.jpg" },
		{"day":28, "url":"http://www.imooncal.com/cs/i/1_m29.jpg" },
		{"day":29, "url":"http://www.imooncal.com/cs/i/1_m30.jpg" },
		{"day":30, "url":"http://www.imooncal.com/cs/i/1_m1.jpg" }
		
	];

	// this.getMoonPic = function() {
	// 	return data; 

});