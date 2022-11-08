#!/usr/bin/env node

import { launchGame, getRandomIntFromInterval, isPrime } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default function getPrime() {
  let rightAnswer = '';
  const randomNumber = getRandomIntFromInterval(2, 50);
  rightAnswer = isPrime(randomNumber);
  return [randomNumber, rightAnswer];
}
launchGame(description, getPrime);
