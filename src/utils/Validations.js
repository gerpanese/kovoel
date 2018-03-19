export default class Validations {
  constructor(string) {
    this.string = string;
  }

  validateEmail() {
    const reqEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reqEx.test(String(this.string).toLowerCase());
  }
}
