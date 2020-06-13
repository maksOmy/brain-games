#!/usr/bin/env node
// import userName from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// wait for response user
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}`);
