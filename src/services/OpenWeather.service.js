const API_KEY = 'acc12f10ca6ad0822a4f085b740e8cf5';
const GET_WEATHER_FOR_CITY_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?q=city_name,country_code&APPID=APIKEY';

export class OpenWeatherService {
  static getWeatherFor(city) {
    if (!city) {
      return Promise.reject('Cannot find weather info for no city');
    }
    return fetch(GET_WEATHER_FOR_CITY_ENDPOINT
        .replace('city_name', city)
        .replace('country_code', 'es')
        .replace('APIKEY', API_KEY)
      )
      .then(res => res.json());
  }
}