import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const isLargestDivisor = (num1, num2, divisor = 50) => {
  if (divisor < 1) {
    return null;
  }
  if (num1 % divisor === 0 && num2 % divisor === 0) {
    return String(divisor);
  }

  return isLargestDivisor(num1, num2, divisor - 1);
};

const getGameValues = () => {
  const getQuestionAndAnswer = () => {
    const values = [];

    const minNum = 1;
    const maxNum = 50;
    const [firstNum, secondNum] = [getRandomInt(minNum, maxNum), getRandomInt(minNum, maxNum)];
    const questionValue = `${firstNum} ${secondNum}`;
    values.push(questionValue);

    const correctAnswer = isLargestDivisor(firstNum, secondNum);
    values.push(correctAnswer);

    return values;
  };
  return engine(gameRule, getQuestionAndAnswer);
};

export default getGameValues;
