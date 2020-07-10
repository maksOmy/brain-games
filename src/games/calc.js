import getRandomInt from '../utils.js';
import ingine from '../index.js';

const game = () => {
  const gameRule = 'What is the result of the expression?';

  const getQAndA = () => {
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomInt(0, 2)];
    const firstNum = getRandomInt(1, 10);
    const secondNum = getRandomInt(1, 10);

    const resultArr = [];

    const question = `${firstNum} ${randomOperator} ${secondNum}`;
    resultArr.push(question);

    const getCorrectAnswer = (num1, operator, Num2) => {
      let result = '';

      switch (operator) {
        case '+':
          result = num1 + Num2;
          break;
        case '-':
          result = num1 - Num2;
          break;
        case '*':
          result = num1 * Num2;
          break;
        default:
          result = 'your answer is crazy ;)';
      }

      return resultArr.push(String(result));
    };
    getCorrectAnswer(firstNum, randomOperator, secondNum);

    return resultArr;
  };
  return ingine(gameRule, getQAndA);
};

export default game;
