// import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = userName();
console.log(`Hello, ${name}!`);

let i = 1;
const gameArchitecture = (gameRules, getRandomQuestion, getUserAnswer, checkCorrectAnswer) => {
  if (i === 1) {
    console.log(gameRules);
  }
  if (i > 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const needToAnswer = getRandomQuestion();
  console.log(`Qestion: ${needToAnswer}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = checkCorrectAnswer(needToAnswer);
  if (userAnswer === correctAnswer) {
    i += 1;
    console.log('Correct!');
    return gameArchitecture(gameRules, getRandomQuestion, getUserAnswer, checkCorrectAnswer);
  } else {
    return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  }
};

export default gameArchitecture;
