import { game, getRandomArbitrary, isPrime } from '../index.js';

// функция формирования пары вопрос + верный ответ
function primePairs() {
  const minNumber = 2;
  const randomNumber = getRandomArbitrary(minNumber);
  const rigthAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber.toString(),
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
