import getRandomNum from '../utils.js';

export const getRandomQuestion = () => {
  const randomNum = getRandomNum(1, 100);
  const stepProgression = getRandomNum(2, 9);

  let step = randomNum;
  let result = '';

  for (let i = 1; i < 9; i += 1) {
    if (i === stepProgression) {
      result = `${result} ..`;
      step += stepProgression;
    }
    if (i === 1) {
      result = `${randomNum}`;
    }
    step += stepProgression;
    result = `${result} ${step}`;
  }
  return result;
};

export const gameRules = 'What number is missing in the progression?';

export const checkCorrectAnswer = (str) => {
  const arrOfStr = str.split(' ');
  const indexOfSuspense = arrOfStr.indexOf('..');

  const nextIndex = Number(arrOfStr[indexOfSuspense + 1]);
  const previusIndex = Number(arrOfStr[indexOfSuspense - 1]);
  const step = (nextIndex - previusIndex) / 2;

  return String(previusIndex + step);
};
