import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'What is the result of the expression?';

const searchCorrectAnswer = (num1, operator, num2) => {
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

const getGameValues = () => {
  const getQuestionAndAnswer = () => {
    const operators = ['+', '-', '*'];
    const firstOperator = 0;
    const lastOperator = 2;
    const randomOperator = operators[getRandomInt(firstOperator, lastOperator)];

    const minNum = 1;
    const maxNum = 10;
    const firstNum = getRandomInt(minNum, maxNum);
    const secondNum = getRandomInt(minNum, maxNum);

    const values = [];

    const questionValue = `${firstNum} ${randomOperator} ${secondNum}`;
    values.push(questionValue);

    const correctAnswer = String(searchCorrectAnswer(firstNum, randomOperator, secondNum));
    values.push(correctAnswer);

    return values;
  };
  return engine(gameRule, getQuestionAndAnswer);
};

export default getGameValues;
