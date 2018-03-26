module.exports = class Gigasecond {
  constructor(date) {
    this.ownDate = date;
  }
  date() {
    let newDate = new Date(this.ownDate.valueOf());
    newDate.setSeconds(newDate.getSeconds() + 1000000000);
    return new Date(newDate.toUTCString());
  }
}


