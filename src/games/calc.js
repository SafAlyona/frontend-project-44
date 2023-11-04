import { game, getRandomArbitrary } from '../index.js';

// функция формирования пары вопрос + верный ответ
function calcPairs() {
  const operations = ['*', '+', '-'];

  const firstGeneratedNumber = getRandomArbitrary();
  const secondGeneratedNumber = getRandomArbitrary();
  const randomIndex = getRandomArbitrary(0, operations.length - 1);

  let value = 0;
  let randomExpression = '';

  const choosenOperator = operations[randomIndex];

  switch (choosenOperator) {
    case '*':
      value = firstGeneratedNumber * secondGeneratedNumber;
      randomExpression = `${firstGeneratedNumber} * ${secondGeneratedNumber}`;
      break;

    case '+':
      value = firstGeneratedNumber + secondGeneratedNumber;
      randomExpression = `${firstGeneratedNumber} + ${secondGeneratedNumber}`;
      break;

    case '-':
      value = firstGeneratedNumber - secondGeneratedNumber;
      randomExpression = `${firstGeneratedNumber} - ${secondGeneratedNumber}`;
      break;
    default:
      break;
  }

  return {
    question: randomExpression,
    correct: value.toString(),
  };
}

// основная функция
function startCalc() {
  game({
    rules: 'What is the result of the expression?',
    generatePairs: calcPairs,
  });
}

export default startCalc;
