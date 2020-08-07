import readlineSync from 'readline-sync';

const IterationsCount = 3;

const runEngine = (gameRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  const iter = (counter) => {
    if (counter > IterationsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    iter(counter + 1);
  };

  iter(1);
};

export default runEngine;
