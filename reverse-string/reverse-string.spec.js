const { reverseString } = require('./reverse-string');

describe('ReverseString', function () {
  it('empty string', function () {
    const expected = '';
    const actual = reverseString('');
    expect(actual).toEqual(expected);
  });

  it('a word', function () {
    const expected = 'tobor';
    const actual = reverseString('robot');
    expect(actual).toEqual(expected);
  });

  it('a capitalized word', function () {
    const expected = 'nemaR';
    const actual = reverseString('Ramen');
    expect(actual).toEqual(expected);
  });

  it('a sentence with punctuation', function () {
    const expected = '!yrgnuh ma I';
    const actual = reverseString('I am hungry!');
    expect(actual).toEqual(expected);
  });

  it('a palindrome', function () {
    const expected = 'racecar';
    const actual = reverseString('racecar');
    expect(actual).toEqual(expected);
  });
});
