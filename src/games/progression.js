import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const createProgressionWithHiddenNum = (hiddenProgressionIndex, progression) => {
  const newProgression = progression.slice();
  newProgression[hiddenProgressionIndex] = '..';

  return newProgression.join(' ');
};

const createProgression = (progressionStep, startValue, length) => {
  const iter = (progressingMember, currentIndex, acc) => {
    if (currentIndex === 0) return acc;
    const nextProgressionMember = progressingMember + progressionStep;

    const newAcc = [...acc, nextProgressionMember];
    return iter(nextProgressionMember, currentIndex - 1, newAcc);
  };

  return iter(startValue, length, []);
};

const getQuestionAndAnswer = () => {
  const firstProgressionIndex = 1;
  const hiddenProgressionIndex = getRandomInt(firstProgressionIndex, progressionLength - 1);

  const minProgressionStep = 1;
  const maxProgressionStep = 9;
  const progressionStep = getRandomInt(minProgressionStep, maxProgressionStep);

  const minStartValue = 1;
  const maxStartValue = 100;
  const startValue = getRandomInt(minStartValue, maxStartValue);

  const progression = createProgression(progressionStep, startValue, progressionLength);
  const question = createProgressionWithHiddenNum(hiddenProgressionIndex, progression);

  const getCorrectAnswer = String(progression[hiddenProgressionIndex]);

  return [question, getCorrectAnswer];
};

const runGame = () => runEngine(gameRule, getQuestionAndAnswer);

export default runGame;
