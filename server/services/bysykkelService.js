const querystring = require('querystring');
const fetch = require('node-fetch');
const { getMapsKey } = require('../config');
const mapsClient = require('@google/maps').createClient({
  key: getMapsKey()
});
const apiRoot = 'https://oslobysykkel.no/api/v1/';


const requestRoute = (endpoint) => {
  const requestUrl = apiRoot + endpoint

  return fetch(requestUrl)
    .then(response => response.json())
}

// Combines results from stations with availabilities and returns them
const requestStations = () => Promise.all([
  requestRoute('stations'),
  requestRoute('stations/availability')
]).then(responses => responses.map(response => response.stations))
  .then(responses => {
    let stations = responses[0],
      availabilities = responses[1],
      result = {};
    stations.forEach((val, i) => {
      result[val.id] = val;
    });
    availabilities.forEach((val, i) => {
      if (result[val.id]) {
        result[val.id] = Object.assign(result[val.id], val);
      }
    });
    return result;
  });

module.exports = {
  requestStations
};
