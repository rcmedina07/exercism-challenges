module.exports = class Binary {
  constructor(binary) {
    this.binary = binary;
  }
  toDecimal() {
    const binaryArray = this.binary.split('').reverse();
    if (this.binary.match(/^[01]+$/)) {
      return binaryArray.reduce((decimal, number, index) => {
        return decimal + number * Math.pow(2, index);
      }, 0);
    }
    return 0;
  }
}