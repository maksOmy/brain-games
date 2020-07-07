import getRandomNum from '../utils.js';
import ingine from '../index.js';

const game = () => {
  const getQuestion = () => getRandomNum(1, 100);
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getCorrectAnswer = (num) => {
    const searchCorrectAnswer = () => {
      if (num % 2 !== 0) {
        return true;
      }
      return false;
    };

    return searchCorrectAnswer() === true ? 'yes' : 'no';
  };

  return ingine(gameRule, getQuestion, getCorrectAnswer);
};

export default game;
