import readlineSync from 'readline-sync';

// вывод приветствия
export function hello() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

// вывод сообщения при победе в игре
export function winMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

// вывод сообщения при неверном ответе
export function loseMessage(answer, correct, name) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
  );
  console.log(`Let's try again, ${name}!`);
}

// проверка ответа пользователя на корректность, сравнивает с правильным ответом
export function correctPairs({ question, correct, name }) {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correct) {
    console.log('Correct!');
    return true;
  }
  loseMessage(answer, correct, name);
  return false;
}

// цикл проигрывания вопроса до 3х правильных ответов
export function loop(generatePairs, name) {
  let i = 0;
  while (i < 3) {
    if (correctPairs({ ...generatePairs(), name })) {
      i += 1;
    } else {
      return false;
    }
  }
  return true;
}

// основная функция - сборка игры
export function game({ rule = '', generatePairs }) {
  const name = hello();
  console.log(rule);
  if (loop(generatePairs, name)) {
    winMessage(name);
  }
  return false;
}

// генерация рандомного числа
export function getRandomArbitrary(min = 1, max = 100) {
  return Math.ceil(Math.random() * (max - min) + min);
}
