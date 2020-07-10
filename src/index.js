import readlineSync from 'readline-sync';

const ingine = (gameRule, getQAndA) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  const gameStart = (counter) => {
    if (counter > 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const [question, answer] = getQAndA();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answer;

    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }

    console.log('Correct!');
    return gameStart(counter + 1);
  };

  console.log(gameStart(1));
};

export default ingine;
