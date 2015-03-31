
'use strict';

angular
	.module('antresolApp')
  	.directive('grid', function() {
  		controllerFunc.$inject = ['$scope', '$attrs', '$element'];

  		var directive = {
  			restrict: 'A',
		    scope: {
		      gridColumns: '=gridColumns',
		      gridData: '=gridData'
		    },
		    controller: controllerFunc
  		}
		return directive;
		
		function controllerFunc(scope, attrs, elem) {
		    scope.$watch('gridData', function (newData, oldData) {
		      	if(newData != undefined && newData.length != 0){
					var left = 0,
						minColNum = 0;

					for(var i = newData.length - 20; i < newData.length; i++) {
						minColNum = [scope.gridColumns[0], scope.gridColumns[1], scope.gridColumns[2], scope.gridColumns[3]].indexOf(Math.min(scope.gridColumns[0], scope.gridColumns[1], scope.gridColumns[2], scope.gridColumns[3]));
						left = minColNum*250;
						newData[i].top = scope.gridColumns[minColNum];
						newData[i].left = left;
						scope.gridColumns[minColNum] = newData[i].image.height/newData[i].image.width*elem.children()[0].offsetWidth + 117 + 10 + scope.gridColumns[minColNum];
					};	
					elem.css('height', Math.max(scope.gridColumns[0], scope.gridColumns[1], scope.gridColumns[2], scope.gridColumns[3]) + 'px');
		      	}
		    });
	    }
	});

