import { game, getRandomArbitrary } from '../index.js';

// проверка простое ли число
function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

// функция формирования пары вопрос + верный ответ
function primePairs() {
  const minNumber = 2;
  const randomNumber = getRandomArbitrary(minNumber);
  const rigthAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: String(randomNumber),
    correct: rigthAnswer,
  };
}

// основная функция
function startPrime() {
  game({
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generatePairs: primePairs,
  });
}

export default startPrime;
