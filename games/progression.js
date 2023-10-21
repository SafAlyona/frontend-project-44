import { game } from '../src/index.js';

// функция формирования пары вопрос + верный ответ
function progressionPairs() {

  const paskhalka = Math.round(Math.random() * Math.max(new Date().getSeconds(), 7) * 5)

  // генерирует рандоvный шаг в прогрессии
  const randomStep = Math.max(Math.round(Math.random() * paskhalka), 1)
  // генерирует рандомную длину прогрессии, которая по условию не может быть меньше 5
  const randomLengthOfProgression = Math.max(Math.round(Math.random() * 10), 5)
  // генерирует рандомный индекс скрытого элемента
  const randomIndexOfHiddenNumber = Math.min(Math.round(Math.random() * randomLengthOfProgression), randomLengthOfProgression)
  // генерирует рандомное стартовое число в прогрессии
  const randomStart = Math.round(Math.random() * 5)
  const progression = []

  // заполняет массив числами с рандомным шагом
  for (let i = 0; i < randomLengthOfProgression; i += 1){
    progression.push(randomStep * i + randomStart)
  }

  let correctHiddenNumber = progression[randomIndexOfHiddenNumber]
  progression[randomIndexOfHiddenNumber] = '..'

  return {
    question: progression.join(' '),
    correct: correctHiddenNumber.toString()
  }
}

// основная функция
function startProgression() {
  game({
    rules: 'What number is missing in the progression?',
    generatePairs: progressionPairs
  })
}  

export { startProgression }