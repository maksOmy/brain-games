import getRandomNum from '../utils.js';
import gameArchitecture from '../index.js';

const getRandomQuestion = () => {
  const words = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * words.length);

  return `${getRandomNum(1, 10)} ${words[randomIndex]} ${getRandomNum(1, 10)}`;
};

const gameRules = 'What is the result of the expression?';

const checkCorrectAnswer = (str) => {
  const arrOfStr = str.split(' ');

  const sign = arrOfStr[1];
  const firstNum = Number(arrOfStr[0]);
  const secondNum = Number(arrOfStr[2]);

  let result = '';
  if (sign === '+') {
    result = firstNum + secondNum;
  }
  if (sign === '-') {
    result = firstNum - secondNum;
  }
  if (sign === '*') {
    result = firstNum * secondNum;
  }
  return String(result);
};

const game = () => gameArchitecture(gameRules, getRandomQuestion, checkCorrectAnswer);

export default game;
