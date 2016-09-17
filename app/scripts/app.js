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
    'uiGmapgoogle-maps'
  ]).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
});
