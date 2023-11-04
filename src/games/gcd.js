import { game, getRandomArbitrary } from '../index.js';

function gcd(a, b) {
  if (b !== 0) {
    const k = a % b;
    return gcd(b, k);
  }
  return a;
}

function gcdPairs() {
  const firstGeneratedNumber = getRandomArbitrary();
  const secondGeneratedNumber = getRandomArbitrary();
  const expression = `${firstGeneratedNumber} ${secondGeneratedNumber}`;

  const greatestCommonDivisor = gcd(
    firstGeneratedNumber,
    secondGeneratedNumber,
  );

  return {
    question: expression,
    correct: greatestCommonDivisor.toString(),
  };
}

// основная функция
function startGcd() {
  game({
    rules: 'Find the greatest common divisor of given numbers.',
    generatePairs: gcdPairs,
  });
}

export default startGcd;
