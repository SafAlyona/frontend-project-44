import readlineSync from 'readline-sync';
import { store } from './store.js';

// вывод приветствия
export function hello() {
  console.log('Welcome to the Brain Games!')
  store.name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${store.name}!`)
}

// цикл проигрывания вопроса до 3х правильных ответов
export function loop(generatePairs) {
  for (let i = 0; i < 3;){
    if(correctPairs(generatePairs())){
      i += 1
    } else {
      i = 0
    }
  }
}

// вывод сообщения при победе в игре
export function win() {
  console.log(`Congratulations, ${store.name}!`)
}

// вывод сообщения при неверном ответе 
export function lose(answer, correct){
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
  console.log(`Let's try again, ${store.name}!`)
}

// проверка ответа пользователя на корректность, сравнивает с правильным ответом
export function correctPairs({question, correct}){
  console.log(`Question: ${question}`)
  const answer = readlineSync.question('Your answer: ') 
  if (answer === correct) {
    console.log('Correct!')
    return true
  } else {
    lose(answer, correct)
    return false
  }
}

// основная функция - сборка игры
export function game({
  rules = '',
  generatePairs
}){
  hello()
  console.log(rules)
  loop(generatePairs)
  win()
}
