module.exports = primeFactors = {
  for: (n) => {
    const factors = [];
    for (i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }
    if (n > 1) {
      factors.push(n);
    }
    return factors;
  }
}

