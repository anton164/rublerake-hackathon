'use strict';

angular.module('SirklerApp')
  .controller('MapController', function ($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
