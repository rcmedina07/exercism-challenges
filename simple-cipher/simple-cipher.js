
module.exports = class Cipher {
  constructor(key) {
    if (key && key.match(/^[a-z]+$/)) {
      this.key = key;
    } else if (key === undefined) {
      this.key = this.generatekey();
    }
    else if (!key.match(/^[a-z]+$/) || key === '') {
      throw new Error('Bad key');
    }
  }

  generatekey() {
    let randomKey = '';

    for (let i = 0; i < 100; i++) {
      let number = Math.floor(Math.random() * (122 - 97) + 97);
      randomKey = randomKey.concat(String.fromCharCode(number));
    }
    return randomKey;
  }

  encode(frase) {
    let encodeFrase = '';

    frase.split("").map((char, index) => {
      let indexKey = index > this.key.length - 1 ? index % this.key.length : index;
      let newLetterCode = frase.charCodeAt(index) + (this.key.charCodeAt(indexKey) - 97);

      if (newLetterCode < 123) {
        encodeFrase = encodeFrase.concat(String.fromCharCode(newLetterCode));
      } else {
        let limitLetterIndex = newLetterCode - 123 > 0 ? newLetterCode - 123 + 97 : 97;
        encodeFrase = encodeFrase.concat(String.fromCharCode(limitLetterIndex));
      }
    });
    return encodeFrase;
  }

  decode(frase) {
    let decodeFrase = '';

    frase.split("").map((char, index) => {
      let indexKey = index > this.key.length - 1 ? index % this.key.length : index;
      let newLetterCode = frase.charCodeAt(index) - (this.key.charCodeAt(indexKey) - 97);

    if (newLetterCode >= 97) {
      decodeFrase = decodeFrase.concat(String.fromCharCode(newLetterCode));
    } else {
      let limitLetterIndex = 123 - (97 - newLetterCode);
      decodeFrase = decodeFrase.concat(String.fromCharCode(limitLetterIndex));
    }
  });
    return decodeFrase;
  }
}

