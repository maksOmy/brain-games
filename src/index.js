import readlineSync from 'readline-sync';

const engine = (gameRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  const iter = (counter) => {
    if (counter > 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${name}!`);
    }

    console.log('Correct!');
    return iter(counter + 1);
  };

  iter(1);
};

export default engine;
