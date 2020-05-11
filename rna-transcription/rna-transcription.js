module.exports = {
  toRna: (dnaStrand) => {
    const rnaStrand = {
      G: "C",
      C: "G",
      T: "A",
      A: "U",
    };

    return dnaStrand
      .split("")
      .reduce((rna, nucleotide) => [...rna, rnaStrand[nucleotide]], [])
      .join("");
  },
};
