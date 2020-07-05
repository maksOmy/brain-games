import getRandomNum from '../utils.js';
import gameArchitecture from '../index.js';

export const getRandomQuestion = () => getRandomNum(1, 50);

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const checkCorrectAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const game = () => gameArchitecture(gameRules, getRandomQuestion, checkCorrectAnswer);

export default game;
