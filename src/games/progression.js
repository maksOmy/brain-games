import getRandomInt from '../generator-random-int.js';
import runEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;
const hiddenProgressionIndex = getRandomInt(0, progressionLength - 1);

const progressionHiddenIndex = (hiddenIndex, progression) => {
  const newProgression = progression.slice();
  newProgression[hiddenIndex] = '..';

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
  const minProgressionStep = 1;
  const maxProgressionStep = 9;
  const progressionStep = getRandomInt(minProgressionStep, maxProgressionStep);

  const minStartValue = 1;
  const maxStartValue = 100;
  const startValue = getRandomInt(minStartValue, maxStartValue);

  const progression = createProgression(progressionStep, startValue, progressionLength);
  const question = progressionHiddenIndex(hiddenProgressionIndex, progression);

  const correctAnswer = String(progression[hiddenProgressionIndex]);

  return [question, correctAnswer];
};

const runGame = () => runEngine(gameRule, getQuestionAndAnswer);

export default runGame;
