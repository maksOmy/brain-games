import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const IsOdd = (num) => num % 2 !== 0;

const getQuestionAndAnswer = () => {
  const minNum = 1;
  const maxNum = 100;
  const questionValue = getRandomInt(minNum, maxNum);

  const correctAnswer = IsOdd(questionValue) ? 'yes' : 'no';

  return [questionValue, correctAnswer];
};

const runGame = () => runEngine(gameRule, getQuestionAndAnswer);

export default runGame;
