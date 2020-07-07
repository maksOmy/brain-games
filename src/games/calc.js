import getRandomNum from '../utils.js';
import ingine from '../index.js';

const game = () => {
  const gameRule = 'What is the result of the expression?';  
  const words = ['+', '-', '*'];
  const obj = {sign: words[getRandomNum(0, 2)], firstNum: getRandomNum(1, 10), secondNum: getRandomNum(1, 10)}
  //const sign = () => words[getRandomNum(0, 2)];
  //const firstNum = () => getRandomNum(1, 10);
  //const secondNum = () => getRandomNum(1, 10);

  const getQuestion = () => `${obj.firstNum} ${obj.sign} ${obj.secondNum}`;  

  const getCorrectAnswer = (str) => {     
    let result = '';

    if (obj.sign === '+') {
      result = obj.firstNum + obj.secondNum;
    }
    if (obj.sign === '-') {
      result = obj.firstNum - obj.secondNum;
    }
    if (obj.sign === '*') {
      result = obj.firstNum * obj.secondNum;
    }
    return String(result);
  };

 return ingine(gameRule, getQuestion, getCorrectAnswer);
};

export default game;
