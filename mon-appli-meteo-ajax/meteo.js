

document.getElementById('weather-query').onsubmit = function(){

	var city = document.getElementById('ville').value;

	if (city != ""){

		document.getElementById('ville').className = '';
		document.getElementById('meteo').className = '';

		var urlAPI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8e602b9ea28ed4f9f8fc97a5f6d1105c&units=metric";

		var request = new XMLHttpRequest();

		request.open('GET', urlAPI);

		request.onload = function(){

			var data = JSON.parse(request.responseText);

			document.getElementById('degres').innerText = data.main.temp;

			var weather = data.weather[0].main;
			var weatherDiv = document.querySelector('#temps i');

			switch (weather) {
				case "Clear":
					weatherDiv.className = "wi wi-day-sunny";
					break;

				case "Rain":
					weatherDiv.className = "wi wi-day-rain";
					break;

				case "Clouds":
					weatherDiv.className = "wi wi-day-cloudy";
					break;

				case "Snow":
					weatherDiv.className = "wi wi-day-snow";
					break;

				case "Mist":
					weatherDiv.className = "wi wi-day-fog";
					break;

				case "Drizzle":
					weatherDiv.className = "wi wi-day-sleet";
					break;

			}

		} 

		request.send();

	} else {
		document.getElementById('ville').className = 'error';
	}


	document.getElementById('ville').select();
	return false;

};

