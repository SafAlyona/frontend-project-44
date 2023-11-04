import { game, getRandomArbitrary, isEven } from '../index.js';

// функция формирования пары вопрос + верный ответ
function evenPairs() {
  const randomNumber = getRandomArbitrary();

  return {
    question: randomNumber,
    correct: isEven(randomNumber) ? 'yes' : 'no',
  };
}

// основная функция
function startEven() {
  game({
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    generatePairs: evenPairs,
  });
}

export default startEven;
