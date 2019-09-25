import WeatherInfo from '../domain/WeatherInfo';
const API_KEY = 'acc12f10ca6ad0822a4f085b740e8cf5';
// eslintdisable-nextline
const GET_WEATHER_FOR_CITY_ENDPOINT =
  'https://api.openweathermap.org/data/2.5/weather?q=city_name,country_code&units=units_name&lang=language_code&APPID=api_key';

export default class OpenWeatherService {
  static getWeatherFor(city) {
    if (!city) {
      return Promise.reject('Cannot find weather info for no city');
    }
    return fetch(
      GET_WEATHER_FOR_CITY_ENDPOINT.replace('city_name', city)
        .replace('country_code', 'es')
        .replace('units_name', 'metric')
        .replace('language_code', 'es')
        .replace('api_key', API_KEY),
    )
      .then(res => res.json())
      .then(weatherInfo => new WeatherInfo(weatherInfo));
  }
}
