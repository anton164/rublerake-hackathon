'use strict';

/**
 * @ngdoc overview
 * @name sirklerApp
 * @description
 * # sirklerApp
 *
 * Main module of the application.
 */
angular
  .module('SirklerApp', [
    'ngRoute',
    'uiGmapgoogle-maps'
  ]).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  }).config(function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'views/registreringz.html',
      controller: 'RegistrationController'
    })

    .when('/directionz', {
      templateUrl: 'pages/directionz.html',
      controller: 'DirectionController'
    })

  });
