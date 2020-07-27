import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const isLargestDivisor = (num1, num2) => {
  if (num2 === 0) {
    return String(num1);
  }

  return isLargestDivisor(num2, num1 % num2);
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
