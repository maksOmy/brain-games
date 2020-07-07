import readlineSync from 'readline-sync';

const ingine = (gameRule, getQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  let counter = 1;
  const gameStart = () => {
    if (counter > 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const question = getQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);

    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);        
    }
    
    counter += 1;
    console.log('Correct!');
    return gameStart();
  }

  console.log(gameStart());
};

export default ingine;
