import { game, getRandomArbitrary } from '../index.js';

let value = 0;

function generatingValuePair(choosenOperator, firstGeneratedNumber, secondGeneratedNumber) {
  switch (choosenOperator) {
    case '*':
      value = firstGeneratedNumber * secondGeneratedNumber;
      break;
    case '+':
      value = firstGeneratedNumber + secondGeneratedNumber;
      break;
    case '-':
      value = firstGeneratedNumber - secondGeneratedNumber;
      break;
    default:
      break;
  }
  return value;
}

// функция формирования пары вопрос + верный ответ
function calcPairs() {
  const operations = ['*', '+', '-'];
  const firstGeneratedNumber = getRandomArbitrary();
  const secondGeneratedNumber = getRandomArbitrary();
  const randomIndex = getRandomArbitrary(0, operations.length - 1);
  const choosenOperator = operations[randomIndex];

  generatingValuePair(choosenOperator, firstGeneratedNumber, secondGeneratedNumber);
  const randomExpression = `${firstGeneratedNumber} ${choosenOperator} ${secondGeneratedNumber}`;

  return {
    question: randomExpression,
    correct: value.toString(),
  };
}

// основная функция
function startCalc() {
  game({
    rule: 'What is the result of the expression?',
    generatePairs: calcPairs,
  });
}

export default startCalc;
