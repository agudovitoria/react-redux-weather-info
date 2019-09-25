export default class Main {
  constructor({
    temp = 0.0,
    pressure = 0,
    humidity = 0,
    temp_min: tempMin = 0.0,
    temp_max: tempMax = 0.0,
  }) {
    this.temp = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
  }
}
