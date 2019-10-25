const request = require('request')

const url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

request({url: url, json: true}, (error,response) => {

	if(error) {
		console.log("Não foi possivel se conectar ao serviço de tempo \n" + error);
	} else if(response.body.error) {
		console.log("Não foi possivel obter a localização");
	} else {
		const longitude = response.body.coord.lon;
		const latitude = response.body.coord.lat;
		console.log(latitude, longitude);
	}
	
})