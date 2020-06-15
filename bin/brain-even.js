#!/usr/bin/env node
import checkAnswerUser from '../src/even.js';
import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
export const name = userName();
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(checkAnswerUser());

