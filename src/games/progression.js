import { game, getRandomArbitrary } from '../index.js';

function generateProgression() {
  const paskhalka = Math.round(Math.random() * (new Date().getDay() * 3));
  // генерирует рандоvный шаг в прогрессии
  const randomStep = Math.max(getRandomArbitrary() * paskhalka, 1);
  // генерирует рандомную длину прогрессии, которая по условию не может быть меньше 5
  const minLength = 5;
  const maxLength = 10;
  const randomLengthOfProgression = getRandomArbitrary(minLength, maxLength);
  // генерирует рандомное стартовое число в прогрессии
  const randomStart = Math.round(Math.random() * 5);
  const progression = [];
  // заполняет массив числами с рандомным шагом
  for (let i = 0; i < randomLengthOfProgression; i += 1) {
    progression.push(randomStep * i + randomStart);
  }
  return progression;
}

function generateRandomIndex() {
  const minLength = 5;
  const maxLength = 10;
  const randomLengthOfProgression = getRandomArbitrary(minLength, maxLength);
  // генерирует рандомный индекс скрытого элемента
  const randomIndexOfHiddenNumber = Math.min(Math.round(Math.random() * (randomLengthOfProgression - 1)), randomLengthOfProgression - 1);
  return randomIndexOfHiddenNumber;
}

// функция формирования пары вопрос + верный ответ
function progressionPairs() {
  const progression = generateProgression();
  const randomIndexOfHiddenNumber = generateRandomIndex();
  const correctHiddenNumber = progression[randomIndexOfHiddenNumber];
  progression[randomIndexOfHiddenNumber] = '..';

  return {
    question: progression.join(' '),
    correct: String(correctHiddenNumber),
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
