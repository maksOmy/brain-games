#!/usr/bin/env node
import {
  getRandomQuestion, gameRules, checkCorrectAnswer,
} from '../src/games/gcd.js';
import gameArchitecture from '../src/index.js';

gameArchitecture(gameRules, getRandomQuestion, checkCorrectAnswer);
