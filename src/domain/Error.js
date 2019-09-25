export default class Error {
  constructor({ code = 500, message = 'Unknown server error' }) {
    this.code = code;
    this.message = message;
  }
}