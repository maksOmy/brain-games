import getRandomNum from '../utils.js';

export const getRandomQuestion = () => getRandomNum(1, 100);
export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
export const checkCorrectAnswer = (num) => {
  if (num % 2 !== 0) {
    return 'yes';
  }
  return 'no';
};
