import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const createProgressionWithHiddenNum = (hiddenProgressionIndex, progression) => {
  const newProgression = progression.slice();
  newProgression[hiddenProgressionIndex] = '..';

  return newProgression.join(' ');
};

const createProgression = (progressionStep, firstProgressionMember) => {
  const progressionLength = 10;
  const iter = (progressingMember, currentIndex, acc) => {
    if (currentIndex === 0) return acc;
    const nextProgressionMember = progressingMember + progressionStep;

    const newAcc = [...acc, nextProgressionMember];
    return iter(nextProgressionMember, currentIndex - 1, newAcc);
  };

  return iter(firstProgressionMember, progressionLength, []);
};

const getGameValues = () => {
  const getQuestionAndAnswer = () => {
    const firstProgressionIndex = 1;
    const lastProgressionIndex = 10;
    const hiddenProgressionIndex = getRandomInt(firstProgressionIndex, lastProgressionIndex);

    const minProgressionStep = 1;
    const maxProgressionStep = 9;
    const progressionStep = getRandomInt(minProgressionStep, maxProgressionStep);

    const minStartValue = 1;
    const maxStartValue = 100;
    const startValue = getRandomInt(minStartValue, maxStartValue);

    const values = [];
    const progression = createProgression(progressionStep, startValue);
    const questionValue = createProgressionWithHiddenNum(hiddenProgressionIndex, progression);
    values.push(questionValue);

    const getCorrectAnswer = (arr) => String(arr[hiddenProgressionIndex]);
    values.push(getCorrectAnswer(progression));

    return values;
  };

  return engine(gameRule, getQuestionAndAnswer);
};
export default getGameValues;
