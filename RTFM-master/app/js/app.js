"use strict";

var app = angular.module('rtfmApp', ['firebase', 'ngRoute']); 

app.constant('fb', {
	url: "https://l197.firebaseio.com/"
});

app.config(function($routeProvider) {

	$routeProvider

		.when('/threads',  {
		 templateUrl: '/templates/threads.html',
		 controller: 'threadsCtrl',
		 resolve: {
				threadsRef: function(threadService){
				  return threadService.getThreads();
				}
			}
		})

		.when('/threads/:threadId', {
		  templateUrl: '/templates/thread.html',
		  controller: 'threadCtrl',
		  resolve: {
			    threadRef: function (threadService, $route) {
			      return threadService.getThread($route.current.params.threadId);
		        },
		        commentsRef: function (threadService, $route) {
		          return threadService.getComments($route.current.params.threadId)
		        }
		    }
		})
	 	
	 	.otherwise({
	      redirectTo: '/threads'
	   })
		
   });


  