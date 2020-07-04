import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = () => readlineSync.question('May I have your name? ');
const name = userName();
console.log(`Hello, ${name}!`);

let i = 1;
const gameArchitecture = (gameRules, getRandomQuestion, checkCorrectAnswer) => {
  if (i === 1) {
    console.log(gameRules);
  }
  if (i > 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const needToAnswer = getRandomQuestion();
  console.log(`Qestion: ${needToAnswer}`);

  const getUserAnswer = () => readlineSync.question('Your answer: ');
  const userAnswer = getUserAnswer();

  const correctAnswer = checkCorrectAnswer(needToAnswer);
  if (userAnswer === correctAnswer) {
    i += 1;
    console.log('Correct!');
    return gameArchitecture(gameRules, getRandomQuestion, checkCorrectAnswer);
  }
  return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
};

export default gameArchitecture;
