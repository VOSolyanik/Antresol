
'use strict';

angular
	.module('antresolApp')
  	.factory('AdsService', ['$resource', 
  		function ($resource) {
			var resource = $resource('http://api.antresol.it/v1/ads', {}, {
				getAdsList: {
					method: 'GET',
					url: 'http://api.antresol.it/v1/ads',
					isArray: false
				},
				getAd: {
					method: 'GET',
					url: 'http://api.antresol.it/v1/ads/:adsId',
					isArray: false
				}
			});

			var Ads = function() {
				this.busy = false;

				this.page = 1;
				this.items  = [];

				this.item = {};
				this.mainImgUrl = '';
			};

			Ads.prototype.nextPage = function () {
				if(this.busy) return;
				this.busy = true;

				resource.getAdsList({page: this.page}).$promise.then(function (response) {
					this.items = this.items.concat(response.data);
					this.page++;
					this.busy = false;
				}.bind(this));
			};

			Ads.prototype.getAd = function (adId) {
				resource.getAd({adsId: adId}).$promise.then(function (response) {
					this.item = response.data;
					this.mainImgUrl = response.data.images[0].url;
				}.bind(this));
			};

			return Ads;
		}
	]);

