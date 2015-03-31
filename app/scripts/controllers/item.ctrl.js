
'use strict';

angular
	.module('antresolApp')
  	.controller('AdsItemCtrl', ['AdsService', '$routeParams', '$window', 
  		function (AdsService, $routeParams, $window) {
			var vm = this;
			
			vm.url = $window.location.href;
			vm.ads = new AdsService();
			vm.setImg = setImg;

			vm.ads.getAd($routeParams.adId);
			
			function setImg(imgUrl) {
				vm.ads.mainImgUrl = imgUrl;
			}
		}
	]);
