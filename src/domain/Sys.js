export default class Sys {
  constructor({ type = 0, id = 0, message = 0.0, country = null, sunrise = 0, sunset = 0 }) {
    this.type = type;
    this.id = id;
    this.message = message;
    this.country = country;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}
