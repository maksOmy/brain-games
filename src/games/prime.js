import getRandomInt from '../utils.js';
import ingine from '../index.js';

const game = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQAndA = () => {
    const resultArr = [];

    const question = getRandomInt(1, 50);
    resultArr.push(question);

    const isCorrectAnswer = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const getCorrectAnswer = isCorrectAnswer(question) === true ? 'yes' : 'no';
    resultArr.push(getCorrectAnswer);

    return resultArr;
  };

  return ingine(gameRule, getQAndA);
};

export default game;
