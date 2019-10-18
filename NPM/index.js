const $ = require('jquery');
const { get } = require('lodash');
const getWeather = require('./getWeather');
let form = $('#form');
let city = $('#input');
let table = $('#table');
let newTable = $('#tbody');
let newLine = ({current, location}) => {
    let name = get(location, 'name');
    let {temp_c} = current;
    let line = `<tr><td>${name}</td><td>${temp_c}</td></tr>`;
    newTable.append(line);
    city.val('');
};
form.on('submit', () => getWeather(city.val()).then(newLine));






// form.addEventListener('submit', function() {
//     let url = `http://api.apixu.com/v1/forecast.json?key=13fc76b820274314b17173821191302&q=${city.value}`;
//     fetch(url)
//     .then(r => r.json())
//     .then(data => {
//         let cityName = $('#city');
//         cityName.innerHTML = data.location.name;
//         let temp = $('#temp');
//         temp.innerHTML = data.current.temp_c;
//     });
// }); 