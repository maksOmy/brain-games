import getRandomNum from '../utils.js';
import gameArchitecture from '../index.js';

const getRandomQuestion = () => getRandomNum(1, 100);
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const checkCorrectAnswer = (num) => {
  if (num % 2 !== 0) {
    return 'yes';
  }
  return 'no';
};

const game = () => gameArchitecture(gameRules, getRandomQuestion, checkCorrectAnswer);

export default game;
