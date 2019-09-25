export default class Location {
  constructor({
    name = null,
    province = null,
    postalCode = null
  }) {
    this.name = name;
    this.province = province;
    this.postalCode = postalCode;
  }
}