import Main from './Main';
import Wind from './Wind';

export default class WeatherInfo {
  constructor({ main = new Main({}), name = null, weather = null, wind = new Wind({}) }) {
    this.main = main;
    this.name = name;
    this.weather = weather;
    this.wind = wind;
  }
}
