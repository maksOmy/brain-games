import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const runGame = () => {
  const getQuestionAndAnswer = () => {
    const minNum = 1;
    const maxNum = 50;
    const firstNum = getRandomInt(minNum, maxNum);
    const secondNum = getRandomInt(minNum, maxNum);

    const question = `${firstNum} ${secondNum}`;

    const correctAnswer = String(getGcd(firstNum, secondNum));

    return [question, correctAnswer];
  };
  return runEngine(gameRule, getQuestionAndAnswer);
};

export default runGame;
