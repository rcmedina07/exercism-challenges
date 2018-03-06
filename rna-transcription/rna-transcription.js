module.exports = {
  dnaTranscribertoRna: (dnaStrand) => {
    const rnaStrand = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    }

    const dna = dnaStrand.split("");
    let rna = '';

    dna.map(nucleotide => {
      if (rnaStrand[nucleotide]) {
        rna = rna.concat(rnaStrand[nucleotide]);
      } else {
        throw new Error('Invalid input');
      }
    });
    return rna;
  }
}