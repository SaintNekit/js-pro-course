const getWeather = value => fetch(`http://api.apixu.com/v1/current.json?key=39e2192ab5be4805b4c190756181912&q=${value}`)
  .then(response => response.json());

module.exports = { getWeather };