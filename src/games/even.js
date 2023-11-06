import { game, getRandomArbitrary } from '../index.js';

// проверка на четность числа
function isEven(num) {
  return num % 2 === 0;
}

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
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    generatePairs: evenPairs,
  });
}

export default startEven;
