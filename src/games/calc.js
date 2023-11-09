import { game, getRandomArbitrary } from '../index.js';

function generatingValuePair(choosenOperator, firstGeneratedNumber, secondGeneratedNumber) {
  switch (choosenOperator) {
    case '*':
      return String(firstGeneratedNumber * secondGeneratedNumber);
    case '+':
      return String(firstGeneratedNumber + secondGeneratedNumber);
    case '-':
      return String(firstGeneratedNumber - secondGeneratedNumber);
    default:
      break;
  }
}

// функция формирования пары вопрос + верный ответ
function calcPairs() {
  const operations = ['*', '+', '-'];
  const firstGeneratedNumber = getRandomArbitrary();
  const secondGeneratedNumber = getRandomArbitrary();
  const randomIndex = getRandomArbitrary(0, operations.length - 1);
  const choosenOperator = operations[randomIndex];

  const correctValue = generatingValuePair(choosenOperator, firstGeneratedNumber, secondGeneratedNumber);
  const randomExpression = `${firstGeneratedNumber} ${choosenOperator} ${secondGeneratedNumber}`;

  return {
    question: randomExpression,
    correct: correctValue,
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
