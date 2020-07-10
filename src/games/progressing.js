import getRandomInt from '../utils.js';
import ingine from '../index.js';

const game = () => {
  const gameRule = 'What number is missing in the progression?';

  const getQAndA = () => {
    const stepProgression = getRandomInt(2, 9);
    let step = getRandomInt(1, 100);

    let question = '';
    const resultArr = [];

    for (let i = 1; i < 9; i += 1) {
      if (i === stepProgression) {
        question = `${question} ..`;
        step += stepProgression;
      }
      if (i === 1) {
        question = `${step}`;
      }
      step += stepProgression;
      question = `${question} ${step}`;
    }
    resultArr.push(question);

    const getCorrectAnswer = (str) => {
      const arrOfStr = str.split(' ');
      const previusIndex = Number(arrOfStr[stepProgression - 1]);

      return String(previusIndex + stepProgression);
    };
    resultArr.push(getCorrectAnswer(question));

    return resultArr;
  };

  return ingine(gameRule, getQAndA);
};
export default game;
