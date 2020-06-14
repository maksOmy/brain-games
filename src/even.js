import readlineSync from 'readline-sync';



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

export const randomNum = getRandomInt(1, 100);


export const checkAnswerUser = (answer) => {
  const isEvenInt = (num) => num % 3 === 0;
  
  if (answer === isEvenInt(randomNum)) {
    return `Correct\nCongratulations, ${userName}!`;
  } else {
      return `${answerUser} is wrong answer ;(. Correct answer was ${!answerUser}.\nLet's try again, ${userName}!`;      
  }
};



