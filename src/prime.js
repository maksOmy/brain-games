import readlineSync from 'readline-sync';
import { getRandomNum } from './even.js';

export const getRandomQuestion = () => getRandomNum(1, 50);
export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const getUserAnswer = () => readlineSync.question('Your answer: ', { limit: ['yes', 'no'] });
export const checkCorrectAnswer = (num) => num % 2 === 0 || num % 3 === 0 ? 'no' : 'yes';;