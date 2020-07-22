import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const createProgressionWithHiddenNum = (hiddenNum, progressions) => {
  const newProgressions = progressions.slice();
  newProgressions[hiddenNum] = '..';

  return newProgressions.join(' ');
};

const createProgression = (stepProgression, progressionMember) => {
  const progressionLength = 10;
  const iter = (stepProgressing, progressingMember, progressingLength, acc) => {
    if (progressingLength === 0) return acc;
    const nextProgressionMember = progressingMember + stepProgressing;

    const newAcc = [...acc, nextProgressionMember];
    return iter(stepProgressing, nextProgressionMember, progressingLength - 1, newAcc);
  };

  return iter(stepProgression, progressionMember, progressionLength, []);
};

const getGameValues = () => {
  const getQuestionAndAnswer = () => {
    const firstMemberInProgression = 1;
    const lastMemberInProgression = 10;
    const hiddenNum = getRandomInt(firstMemberInProgression, lastMemberInProgression);

    const minStepProgression = 1;
    const maxStepProgression = 9;
    const stepProgression = getRandomInt(minStepProgression, maxStepProgression);

    const minProgressionMember = 1;
    const maxProgressionMember = 100;
    const firstProgressionMember = getRandomInt(minProgressionMember, maxProgressionMember);

    const values = [];

    const questionValue = createProgressionWithHiddenNum(hiddenNum,
      createProgression(stepProgression, firstProgressionMember));
    values.push(questionValue);

    const getCorrectAnswer = (str) => {
      const arrOfStr = str.split(' ');
      const previusMember = Number(arrOfStr[hiddenNum - 1]);

      return String(previusMember + stepProgression);
    };
    values.push(getCorrectAnswer(questionValue));

    return values;
  };

  return engine(gameRule, getQuestionAndAnswer);
};
export default getGameValues;
