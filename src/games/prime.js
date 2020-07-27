import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num, divisor = 2) => {
  if (divisor === num) return true;
  if (num % divisor !== 0 && num !== 1) return isPrimeNum(num, divisor + 1);

  return false;
};

const getGameValues = () => {
  const getQuestionAndAnswer = () => {
    const values = [];
    const minNum = 1;
    const maxNum = 50;
    const questionValue = getRandomInt(minNum, maxNum);
    values.push(questionValue);

    const correctAnswer = isPrimeNum(questionValue) === true ? 'yes' : 'no';
    values.push(correctAnswer);

    return values;
  };

  return engine(gameRule, getQuestionAndAnswer);
};

export default getGameValues;
