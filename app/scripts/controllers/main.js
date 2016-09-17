'use strict';

/**
 * @ngdoc function
 * @name sirklerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sirklerApp
 */
angular.module('SirklerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
