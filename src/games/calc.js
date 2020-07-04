import getRandomNum from '../utils.js';

const words = ['+', '-', '*'];
const randomIndex = Math.floor(Math.random() * words.length);

export const getRandomQuestion = () => `${getRandomNum(1, 10)} ${words[randomIndex]} ${getRandomNum(1, 10)}`;

export const gameRules = 'What is the result of the expression?';

export const checkCorrectAnswer = (str) => {
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
