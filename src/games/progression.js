import { game, getRandomArbitrary } from '../index.js';

function randomLengthOfProgression() {
  const minLength = 5;
  const maxLength = 10;
  return getRandomArbitrary(minLength, maxLength);
}

function generateProgression() {
  const paskhalka = Math.round(Math.random() * (new Date().getDay() * 3));
  const randomStep = Math.max(getRandomArbitrary(0, 1) * paskhalka, 1);
  const randomStart = Math.round(Math.random() * 5);
  const progression = [];
  for (let i = 0; i < randomLengthOfProgression(); i += 1) {
    progression.push(randomStep * i + randomStart);
  }
  return progression;
}

const generateRandomIndex = () => getRandomArbitrary(0, randomLengthOfProgression() - 1);

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
