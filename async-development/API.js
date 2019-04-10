let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    let city = document.getElementById('input').value;
    let url = `http://api.apixu.com/v1/forecast.json?key=13fc76b820274314b17173821191302&q=${city}`;
    fetch(url)
    .then(r => r.json())
    .then(data => {
        let cityName = document.getElementById('city');
        cityName.innerHTML = data.location.name;
        let temp = document.getElementById('temp');
        temp.innerHTML = data.current.temp_c;
    });
}); 

