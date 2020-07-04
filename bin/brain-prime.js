#!/usr/bin/env node
import {
  getRandomQuestion, gameRules, checkCorrectAnswer,
} from '../src/games/prime.js';
import gameArchitecture from '../src/index.js';

gameArchitecture(gameRules, getRandomQuestion, checkCorrectAnswer);
