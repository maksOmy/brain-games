import getRandomInt from '../utils.js';
import ingine from '../index.js';

const game = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQAndA = () => {
    const resultArr = [];

    const question = getRandomInt(1, 100);
    resultArr.push(question);

    const searchCorrectAnswer = (num) => {
      if (num % 2 !== 0) {
        return true;
      }
      return false;
    };

    const getCorrectAnswer = searchCorrectAnswer(question) === true ? 'yes' : 'no';
    resultArr.push(getCorrectAnswer);

    return resultArr;
  };
  ingine(gameRule, getQAndA);
};

export default game;
