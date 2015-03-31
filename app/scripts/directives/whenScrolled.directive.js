
'use strict';

angular
	.module('antresolApp')
  	.directive('whenScrolled', ['$window', function($window) {
	    return function(scope, elm, attr) {
	        var top = angular.element($window)[0].screenTop;
		    var origHeight = angular.element($window)[0].screen.height;
		    var height = (origHeight * 0.9);
	        
	        angular.element($window).bind('scroll', function() {
	            if (angular.element($window)[0].scrollY >= (height)) {
	                angular.element($window)[0].requestAnimationFrame(function(){
		            	// invoke the function passed into the 'whenScrolled' attribute
		            	scope.$apply(attr.whenScrolled);
		            	// increment the threshold
		            	height += (origHeight * 1.6);
		          	})
	            }
	        });
	    };
	}]);