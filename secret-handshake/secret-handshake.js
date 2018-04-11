module.exports = class SecretHandshake {
  constructor(decimal) {
    this.decimal = this.getBinary(decimal);
  }
  
  getBinary(decimal) {
    if (typeof decimal === 'number') {
      return decimal;
    } else {
      throw new Error('Handshake must be a number');
    }
  }

  commands() {
    const operations = ['wink', 'double blink', 'close your eyes', 'jump'];
    let handshake = operations.reduce((shakes, operation, index) => {
      if (this.decimal & Math.pow(2, index)) shakes.push(operation);
      return shakes;
    }, []);
    if (this.decimal & 16) handshake.reverse();
    return handshake;
  }
}
