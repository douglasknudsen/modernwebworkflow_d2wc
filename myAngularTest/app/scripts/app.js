'use strict';

angular.module('myANgularTestApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/myNewRoute', {
        templateUrl: 'views/myNewRoute.html',
        controller: 'MynewrouteCtrl'
      })
      .when('/newRoute', {
        templateUrl: 'views/newRoute.html',
        controller: 'NewrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
