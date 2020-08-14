import getRandomInt from '../randomIntGenerator.js';
import runEngine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const IsOdd = (num) => num % 2 !== 0;

const getQuestionAndAnswer = () => {
  const minNum = 1;
  const maxNum = 100;
  const question = getRandomInt(minNum, maxNum);

  const correctAnswer = IsOdd(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGame = () => runEngine(gameRule, getQuestionAndAnswer);

export default runGame;
