import getRandomInt from '../randomIntGenerator.js';
import runEngine from '../index.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];

  const minNum = 1;
  const maxNum = 10;
  const firstNum = getRandomInt(minNum, maxNum);
  const secondNum = getRandomInt(minNum, maxNum);

  const question = `${firstNum} ${randomOperator} ${secondNum}`;

  const correctAnswer = String(calculate(firstNum, randomOperator, secondNum));

  return [question, correctAnswer];
};

const runGame = () => runEngine(gameRule, getQuestionAndAnswer);

export default runGame;
