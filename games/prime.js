import { game } from '../src/index.js';

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
}

// функция формирования пары вопрос + верный ответ
function primePairs() {
  const randomNumber = Math.max(Math.round(Math.random() * 100), 2);
  const rigthAnswer = isPrime(randomNumber);

  return {
    question: randomNumber.toString(),
    correct: rigthAnswer,
  };
}

// основная функция
function startPrime() {
  game({
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generatePairs: primePairs,
  });
}

export { startPrime };
