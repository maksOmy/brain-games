import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  const iter = (divisor = 2) => {
    if (divisor < 2) {
      return false;
    }
    if (num % divisor !== 0 && num !== 1) return iter(divisor + 1);

    return divisor === num;
  };
  return iter(2);
};

const getQuestionAndAnswer = () => {
  const minNum = 1;
  const maxNum = 50;
  const questionValue = getRandomInt(minNum, maxNum);

  const correctAnswer = isPrimeNum(questionValue) ? 'yes' : 'no';

  return [questionValue, correctAnswer];
};

const runGame = () => runEngine(gameRule, getQuestionAndAnswer);

export default runGame;
