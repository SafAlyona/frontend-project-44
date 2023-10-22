import { game } from '../src/index.js';

// функция формирования пары вопрос + верный ответ
function calcPairs() {
  const operations = ['*', '+', '-'];
  const firstGeneratedNumber = Math.ceil(Math.random() * 100);
  const secondGeneratedNumber = Math.ceil(Math.random() * 100);
  const randomIndex = Math.round(Math.random() * (operations.length - 1));

  let value = 0;
  let randomExpression = '';

  switch (operations[randomIndex]) {
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
