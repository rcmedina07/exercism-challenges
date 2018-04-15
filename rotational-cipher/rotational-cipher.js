module.exports = class RotationalCipher {
  rotate(frase, shift) {
    let shiftedFrase = '';
    frase.split('').map((letter, i) => {
      let shiftLetter = '';
      let char = frase.charCodeAt(i);
      let code = char + shift;
      if (char <= 122 && char > 96) {
        shiftLetter = code <= 122 ? String.fromCharCode(code) : String.fromCharCode(code - 26);
      } else if (char <= 90 && char > 65) {
        shiftLetter = code <= 90 ? String.fromCharCode(code) : String.fromCharCode(code - 26);
      } else {
        shiftLetter = String.fromCharCode(char);
      }
      shiftedFrase = shiftedFrase.concat(shiftLetter);
    });
    return shiftedFrase;
  }
}