import Wind from './Wind';
import Clouds from './Clouds';
import Sys from './Sys';
import Main from './Main';
import Weather from './Weather';
import Coord from './Coord';
/**
 * coord
*   coord.lon City geo location, longitude
*   coord.lat City geo location, latitude
* weather (more info Weather condition codes)
* weather.id Weather condition id
*   weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
*   weather.description Weather condition within the group
*   weather.icon Weather icon id
* base Internal parameter
* main
*   main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
*   main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
*   main.humidity Humidity, %
*   main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
*   main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
*   main.sea_level Atmospheric pressure on the sea level, hPa
*   main.grnd_level Atmospheric pressure on the ground level, hPa
* wind
*   wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
*   wind.deg Wind direction, degrees (meteorological)
* clouds
*   clouds.all Cloudiness, %
* rain
*   rain.1h Rain volume for the last 1 hour, mm
*   rain.3h Rain volume for the last 3 hours, mm
* snow
*   snow.1h Snow volume for the last 1 hour, mm
*   snow.3h Snow volume for the last 3 hours, mm
* dt Time of data calculation, unix, UTC
* sys
*   sys.type Internal parameter
*   sys.id Internal parameter
*   sys.message Internal parameter
*   sys.country Country code (GB, JP etc.)
*   sys.sunrise Sunrise time, unix, UTC
*   sys.sunset Sunset time, unix, UTC
* timezone Shift in seconds from UTC
* id City ID
* name City name
* cod Internal parameter
*/
export default class OpenWeatherResponse {
  constructor({
    base = null,
    clouds = {},
    cod = null,
    coord = {},
    dt = null,
    id = null,
    main = {},
    name = null,
    sys = {},
    timezone = null,
    visibility = null,
    weather = [],
    wind = {}
  }) {
    this.base = base;
    this.clouds = new Clouds(clouds);
    this.cod = cod;
    this.coord = new Coord(coord);
    this.dt = dt;
    this.id = id;
    this.main = new Main(main);
    this.name = name;
    this.sys = new Sys(sys);
    this.timezone = timezone;
    this.visibility = visibility;
    this.weather = weather.map(w => new Weather(w));
    this.wind = new Wind(wind);
  }
}