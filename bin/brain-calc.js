#!/usr/bin/env node
import {
  getRandomQuestion, gameRules, checkCorrectAnswer,
} from '../src/games/calc.js';
import gameArchitecture from '../src/index.js';

gameArchitecture(gameRules, getRandomQuestion, checkCorrectAnswer);
