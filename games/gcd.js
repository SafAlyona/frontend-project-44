import { game } from '../src/index.js';

function nod(a, b) {
  if (b !== 0) {
    const k = a % b;
    return nod(b, k);
  }
  return a;
}

function gcdPairs() {
  const firstGeneratedNumber = Math.ceil(Math.random() * 100);
  const secondGeneratedNumber = Math.ceil(Math.random() * 100);
  const expression = `${firstGeneratedNumber} ${secondGeneratedNumber}`;

  const greatestCommonDivisor = nod(
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
