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
export function correctPairs({ question, correct }) {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correct) {
    console.log('Correct!');
    return true;
  }
  loseMessage(answer, correct);
  return false;
}

// цикл проигрывания вопроса до 3х правильных ответов
export function loop(generatePairs) {
  let i = 0;
  while (i < 3) {
    if (correctPairs(generatePairs())) {
      i += 1;
    } else {
      return false;
    }
  }
  return true;
}

// основная функция - сборка игры
export function game({ rule = '', generatePairs }) {
  hello();
  console.log(rule);
  if (loop(generatePairs)) {
    winMessage();
  }
}

// генерация рандомного числа
export function getRandomArbitrary(min = 1, max = 100) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// проверка на четность числа
export function isEven(num) {
  return num % 2 === 0;
}

// проверка простое ли число
export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
