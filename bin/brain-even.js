#!/usr/bin/env node
import { getRandomQuestion, gameRules, getUserAnswer, checkCorrectAnswer } from '../src/even.js'
import gameArchitecture from './index.js';

gameArchitecture(gameRules, getRandomQuestion, getUserAnswer, checkCorrectAnswer);