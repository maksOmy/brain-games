import readlineSync from 'readline-sync';

export function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomQuestion = () => getRandomNum(1, 100);
export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getUserAnswer = () => readlineSync.question('Your answer: ', { limit: ['yes', 'no'] });
export const checkCorrectAnswer = (num) => num % 2 !== 0 ? 'yes' : 'no';
