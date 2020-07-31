import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const gameRule = 'What is the result of the expression?';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Is crazy answer ;)';
  }
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const firstIndexOperators = 0;
  const lastIndexOperators = operators.length - 1;
  const randomOperator = operators[getRandomInt(firstIndexOperators, lastIndexOperators)];

  const minNum = 1;
  const maxNum = 10;
  const firstNum = getRandomInt(minNum, maxNum);
  const secondNum = getRandomInt(minNum, maxNum);

  const questionValue = `${firstNum} ${randomOperator} ${secondNum}`;

  const correctAnswer = String(calculate(firstNum, randomOperator, secondNum));

  return [questionValue, correctAnswer];
};

const runGame = () => runEngine(gameRule, getQuestionAndAnswer);

export default runGame;
