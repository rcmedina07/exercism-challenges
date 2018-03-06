var { dnaTranscribertoRna} = require('./rna-transcription');

describe('toRna()', function () {
  it('transcribes cytosine to guanine', function () {
    expect(dnaTranscribertoRna('C')).toEqual('G');
  });

  it('transcribes guanine to cytosine', function () {
    expect(dnaTranscribertoRna('G')).toEqual('C');
  });

  it('transcribes adenine to uracil', function () {
    expect(dnaTranscribertoRna('A')).toEqual('U');
  });

  it('transcribes thymine to adenine', function () {
    expect(dnaTranscribertoRna('T')).toEqual('A');
  });

  it('transcribes all dna nucleotides to their rna complements', function () {
    expect(dnaTranscribertoRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU');
  });

  it('correctly handles completely invalid input', function () {
    expect(function () { dnaTranscribertoRna('XXX'); }).toThrow(
      new Error('Invalid input')
    );
  });

  it('correctly handles partially invalid input', function () {
    expect(function () { dnaTranscribertoRna('ACGTXXXCTTAA'); }).toThrow(
      new Error('Invalid input')
    );
  });
});
