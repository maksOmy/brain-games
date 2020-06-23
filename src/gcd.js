import { getRandomNum } from './even.js';
import readlineSync from 'readline-sync';

export const getRandomQuestion = () => {
  const fisrtNum = getRandomNum(1,50);
  const secondNum = getRandomNum(1,50);
  if (fisrtNum % 2 === 0 && secondNum % 2 === 0) {
    return `${fisrtNum} ${secondNum}`;
  }
  if (fisrtNum % 3 === 0 && secondNum % 3 === 0) {
    return `${fisrtNum} ${secondNum}`;
  } else {
    return getRandomQuestion();
  }
};

export const gameRules = 'Find the greatest common divisor of given numbers.';
export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const checkCorrectAnswer = (str) => {
  const arrStr = str.split(' ');
  const firstNum = Number(arrStr[0]);
  const secondNum = Number(arrStr[1]);

  let result = [];
    for (let i = 1; i <= 50; i += 1) {
      if (firstNum % i === 0 && secondNum % i === 0) {
        result.push(i);
      }
    }
  return String(result[result.length - 1]);
};