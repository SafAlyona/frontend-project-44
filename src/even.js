import readlineSync from 'readline-sync';
import { store } from './store.js';

function isEven() {
  // генерация рандомного числа и вывод
  let randomNumber = Math.round(Math.random() * 10)
  console.log(`Question: ${randomNumber}`)

  // проверка на четность
  let isNumberEven = 'no'
  if (randomNumber % 2 === 0){
    isNumberEven = 'yes'
  }

  // ответ
  const answer = readlineSync.question('Your answer: ') 

// сверяем ответ пользователя с верным
    if (answer === isNumberEven) {
      console.log('Correct!')
      return true
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isNumberEven}".`)
      console.log(`Let's try again, ${store.name}!`)
      return false
    }
}

function startEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3;){
    if(isEven()){
      i += 1
    } else {
      i = 0
    }
  }
  console.log(`Congratulations, ${store.name}!`)
}  

export {startEven}
