//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const aliquot = (num) => {
  let aliquotSum = 1;
  for(let i = 2; i <= Math.sqrt(num); i++){
    if((num % i) === 0){
       const quotient = num / i;
       aliquotSum += (i === quotient ? i : i + quotient);
    }
  }
  return aliquotSum;
};

export const classify = (num) => {
  if(num <= 0){
     throw new Error('Classification is only possible for natural numbers.');
  }
  
  const aliquotSum = aliquot(num);
  if((aliquotSum === 1 && num % 2 != 0) || num > aliquotSum){
     return "deficient"
  } else if(num === aliquotSum){
    return "perfect";
  } else {
    return "abundant"
  }
};
