import { game, getRandomArbitrary } from '../index.js';

const paskhalka = Math.round(
  Math.random() * Math.max(new Date().getSeconds(), 7) * 5,
);
// генерирует рандоvный шаг в прогрессии
const randomStep = Math.max(getRandomArbitrary() * paskhalka, 1);
// генерирует рандомную длину прогрессии, которая по условию не может быть меньше 5
const randomLengthOfProgression = getRandomArbitrary(5, 10);
// генерирует рандомный индекс скрытого элемента
const randomIndexOfHiddenNumber = Math.min(
  Math.round(Math.random() * (randomLengthOfProgression - 1)),
  randomLengthOfProgression - 1,
);
  // генерирует рандомное стартовое число в прогрессии
const randomStart = Math.round(Math.random() * 5);
const progression = [];

// функция формирования пары вопрос + верный ответ
function progressionPairs() {
  // заполняет массив числами с рандомным шагом
  for (let i = 0; i < randomLengthOfProgression; i += 1) {
    progression.push(randomStep * i + randomStart);
  }

  const correctHiddenNumber = progression[randomIndexOfHiddenNumber].toString();
  progression[randomIndexOfHiddenNumber] = '..';

  return {
    question: progression.join(' '),
    correct: correctHiddenNumber,
  };
}

// основная функция
function startProgression() {
  game({
    rule: 'What number is missing in the progression?',
    generatePairs: progressionPairs,
  });
}

export default startProgression;
