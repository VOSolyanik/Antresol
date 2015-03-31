
'use strict';

angular
	.module('antresolApp')
  	.controller('AdsCtrl', ['$scope', '$timeout', 'AdsService', 
  		function ($scope, $timeout, AdsService) {
			var vm = this;

			vm.gridColumns = [0,0,0,0];
			vm.ads = new AdsService();
		}
	]);

