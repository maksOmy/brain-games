import readlineSync from 'readline-sync';
import { name }from '../bin/brain-even.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;// Максимум не включается, минимум включается
}

const checkAnswerUser = () => {
  for (let i = 1; i <= 3; i += 1) {
    const isEvenInt = (num) => num % 2 !== 0;
    const randomNum = getRandomInt(1, 100);

    console.log(`Qestion: ${randomNum}`);

    const answerUser = readlineSync.keyInYN('Your answer');

    if (answerUser === isEvenInt(randomNum)) {
      console.log(`Correct!`);
    } else {
      return `${answerUser} is wrong answer ;(. Correct answer was ${!answerUser}.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default checkAnswerUser;
