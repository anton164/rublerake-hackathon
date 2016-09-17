const querystring = require('querystring');
const fetch = require('node-fetch');
const { getMapsKey } = require('../config');
const mapsClient = require('@google/maps').createClient({
  key: getMapsKey()
});


const DIRECTIONS_URL = "https://maps.googleapis.com/maps/api/directions/json";

const DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json";

const requestRoute = (mode, from, to) => {
  const qs = {
    "origin":from.split(" ").join("+"),
    "destination":to.split(" ").join("+"),
    "mode":mode,
    "transit_mode":"rail",
    "key":getMapsKey()
  };

  const requestUrl = DIRECTIONS_URL+"?"+querystring.stringify(qs);
  console.log("Requesting with url", requestUrl);

  return fetch(requestUrl)
    .then(response => response.json())
    .then(data => data.routes || [])
    .then(routes => routes.length > 0 ? routes[0] : null)
}

const requestDistance = (mode, from, to) => {
  const qs = {
    "origins": from.split(" ").join("+"),
    "destinations": to.split(" ").join("+"),
    "mode": mode,
    "key": getMapsKey()
  };

  const requestUrl = DISTANCE_MATRIX_URL+"?"+querystring.stringify(qs);
  console.log("Requesting with url", requestUrl);

  return fetch(requestUrl)
    .then(response => response.json())
    .then(data => data.routes || [])
}

const requestDrivingRoute = (from, to) => requestRoute("driving", from, to)
const requestTransitRoute = (from, to) => requestRoute("transit", from, to)
const requestWalkingRoute = (from, to) => requestRoute("walking", from, to)
const requestBicyclingRoute = (from, to) => requestRoute("bicycling", from, to)

module.exports = {
  requestDrivingRoute,
  requestTransitRoute,
  requestBicyclingRoute,
  requestWalkingRoute
};
