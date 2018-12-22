let term = 10001;
let primeCounter = 0;
let number = 0;
let nos=2;
while (primeCounter < term) {
  let isPrime = true;
  number = nos;
  let upperLimit = Math.sqrt(number);
  for (let divisor=2;divisor<=upperLimit;divisor++) {
    if (number%divisor == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    primeCounter += 1;
    if (primeCounter == term) {
    }
  }
  nos=nos+1;
}
console.log(term+"th prime no is",number);


