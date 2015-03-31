'use strict';

angular
  .module('antresolApp', [
    'ngResource',
    'ngRoute',
    'ngSocial'
  ])
  .config(['$routeProvider', '$locationProvider', '$resourceProvider',
    function ($routeProvider, $locationProvider, $resourceProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/list.html',
          controller: 'AdsCtrl',
          controllerAs: 'vm'
        })
        .when('/ads', {
          templateUrl: 'views/list.html',
          controller: 'AdsCtrl',
          controllerAs: 'vm'
        })
        .when('/ads/:adId', {
          templateUrl: 'views/item.html',
          controller: 'AdsItemCtrl',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/ads'
        });

      if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
      };
  }]);
