#!/usr/bin/env node

import { getLargsetGCD, getRandomIntFromInterval, launchGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers';
export default function getGCD() {
  const firstNumber = getRandomIntFromInterval(2, 60);
  const secondNumber = getRandomIntFromInterval(2, 120);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getLargsetGCD(firstNumber, secondNumber);
  const rightAnswer = answer.toString();
  return [question, rightAnswer];
}
launchGame(description, getGCD);
