import { game } from '../src/index.js';

// функция формирования пары вопрос + верный ответ
function evenPairs() {
	const randomNumber = Math.max(Math.ceil(Math.random() * 10), 1);
	let isNumberEven = 'no';

	if (randomNumber % 2 === 0) {
		isNumberEven = 'yes';
	}

	return {
		question: randomNumber,
		correct: isNumberEven,
	};
}

// основная функция
function startEven() {
	game({
		rules: 'Answer "yes" if the number is even, otherwise answer "no".',
		generatePairs: evenPairs,
	});
}

export default startEven;
