let form = document.getElementById('form');
let city = document.getElementById('input');
form.addEventListener('submit', function() {
    let url = `http://api.apixu.com/v1/forecast.json?key=13fc76b820274314b17173821191302&q=${city.value}`;
    fetch(url)
    .then(r => r.json())
    .then(data => {
        let cityName = document.getElementById('city');
        cityName.innerHTML = data.location.name;
        let temp = document.getElementById('temp');
        temp.innerHTML = data.current.temp_c;
    });
}); 
