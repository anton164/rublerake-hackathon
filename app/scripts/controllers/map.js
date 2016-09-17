'use strict';

angular.module('SirklerApp')
  .controller('MapController', function($scope, uiGmapGoogleMapApi) {
    var origin = { // Høvik
      latitude: 59.901401,
      longitude: 10.557090
    }, destination = { // Oslo
      latitude: 59.91139,
      longitude: 10.7522
    };
    $scope.map = {
      control: {},
      center: origin,
      zoom: 14
    };
    $scope.directions = {};
    $scope.directions.origin = origin;
    $scope.directions.destination = destination;

    var directionsDisplay, directionsService, geocoder;
    uiGmapGoogleMapApi.then(function (maps) {
      directionsDisplay = new google.maps.DirectionsRenderer();
      directionsService = new google.maps.DirectionsService();
      geocoder = new google.maps.Geocoder();


      var request = {
        origin: 'Høvik, Norge',
        destination: 'Oslo, Norge',
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };

      directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap($scope.map.control.getGMap());
          directionsDisplay.setPanel(document.getElementById('directionsList'));
          $scope.directions.showList = true;
        } else {
          alert('Google route unsuccesfull!');
        }
      });
    });
  });

