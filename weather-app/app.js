const request = require('request')

const url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

request({url: url, json: true}, (error,response) => {

	const longitude = response.body.coord.lon;
	const latitude = response.body.coord.lat;
	console.log(latitude, longitude);
})