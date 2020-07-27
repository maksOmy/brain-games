import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const createProgressionWithHiddenNum = (hiddenIndexInProgression, progressions) => {
  const newProgressions = progressions.slice();
  newProgressions[hiddenIndexInProgression] = '..';

  return newProgressions.join(' ');
};

const createProgression = (progressionStep, progressionMember) => {
  const progressionLength = 10;
  const iter = (progressingMember, currentIndex, acc) => {
    if (currentIndex === 0) return acc;
    const nextProgressionMember = progressingMember + progressionStep;

    const newAcc = [...acc, nextProgressionMember];
    return iter(nextProgressionMember, currentIndex - 1, newAcc);
  };

  return iter(progressionMember, progressionLength, []);
};

const getGameValues = () => {
  const getQuestionAndAnswer = () => {
    const firstIndexInProgression = 1;
    const lastIndexInProgression = 10;
    const hiddenIndexInProgression = getRandomInt(firstIndexInProgression, lastIndexInProgression);

    const minStepProgression = 1;
    const maxStepProgression = 9;
    const progressionStep = getRandomInt(minStepProgression, maxStepProgression);

    const minStartValue = 1;
    const maxStartValue = 100;
    const StartValue = getRandomInt(minStartValue, maxStartValue);

    const values = [];
    const progression = createProgression(progressionStep, StartValue);
    const questionValue = createProgressionWithHiddenNum(hiddenIndexInProgression, progression);
    values.push(questionValue);

    const getCorrectAnswer = (arr) => {
      const previusMember = Number(arr[hiddenIndexInProgression - 1]);

      return String(previusMember + progressionStep);
    };
    values.push(getCorrectAnswer(progression));

    return values;
  };

  return engine(gameRule, getQuestionAndAnswer);
};
export default getGameValues;
