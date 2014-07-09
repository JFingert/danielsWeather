$(function () { // beefy js/app.js:bundle.js --live

	var SummaryView = require('./views/summary.js');
	var DetailView = require('./views/details.js');
	var ForecastView = require('./views/forecast.js');

	var WeatherModel = require('./models/weather');

	var app = {};
	app.views = {};
	app.models = {};

//Geolocation
function success(position) {
	var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;

	LatLong = latitude + "," + longitude;

	weatherRequest(LatLong);
};

navigator.geolocation.getCurrentPosition(success);

window.app = app;

// var LatLong = "45.532814,-122.689296"





function weatherRequest(latlong) {

	var APIKey = "8783b7b8e12ec2201c7d2e9f20666411"
	var url = "https://api.forecast.io/forecast/" + APIKey + '/' + LatLong;

	$.getJSON(url + "?callback=?", null, function(weatherData) {
		app.models.currentWeather.set(weatherData);
	});

};

app.models.currentWeather = new WeatherModel({currently: {}});

app.views.summary = new SummaryView({model: app.models.currentWeather});
app.views.details = new DetailView({model: app.models.currentWeather});
app.views.forecast = new ForecastView({model: app.models.currentWeather});


window.app = app;

});