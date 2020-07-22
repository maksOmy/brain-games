import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIsEven = (num) => {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
};

const getGameValues = () => {
  const getQuestionAndAnswer = () => {
    const values = [];
    const minNum = 1;
    const maxNum = 100;
    const questionValue = getRandomInt(minNum, maxNum);
    values.push(questionValue);

    const correctAnswer = checkIsEven(questionValue) === true ? 'yes' : 'no';
    values.push(correctAnswer());

    return values;
  };
  engine(gameRule, getQuestionAndAnswer);
};

export default getGameValues;
