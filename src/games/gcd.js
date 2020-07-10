import getRandomInt from '../utils.js';
import ingine from '../index.js';

const game = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';

  const getQAndA = () => {
    const resultArr = [];

    const getTooInt = (Num1, Num2) => {
      const result = [];
      if (Num1 % 2 === 0 && Num2 % 2 === 0) {
        result.push(Num1, Num2);
        return result;
      }
      if (Num1 % 3 === 0 && Num2 % 3 === 0) {
        result.push(Num1, Num2);
        return result;
      }
      return getTooInt(getRandomInt(1, 50), getRandomInt(1, 50));
    };

    const [firstNum, secondNum] = getTooInt(getRandomInt(1, 50), getRandomInt(1, 50));
    const question = `${firstNum} ${secondNum}`;
    resultArr.push(question);

    const getCorrectAnswer = (Num1, Num2) => {
      const result = [];
      for (let i = 2; i <= 50; i += 1) {
        if (Num1 % i === 0 && Num2 % i === 0) {
          result.push(i);
        }
      }
      const largestDivisor = String(result[result.length - 1]);
      return resultArr.push(largestDivisor);
    };
    getCorrectAnswer(firstNum, secondNum);

    return resultArr;
  };
  return ingine(gameRule, getQAndA);
};

export default game;
