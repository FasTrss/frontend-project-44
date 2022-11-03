#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHi from './cli.js';

const name = sayHi();

export const operators = [{
  sign: '+',
  method: function sum(int1, int2) { return int1 + int2; },
}, {
  sign: '-',
  method: function substract(int1, int2) { return int1 - int2; },
}, {
  sign: '*',
  method: function multiply(int1, int2) { return int1 * int2; },
}];

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntFromInterval(minim, maxim) {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function userAnswer() {
  const answerIs = readlineSync.question('Your answer: ');
  return answerIs;
}

export const gameLogic = (generateRound) => {
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = userAnswer();
    if (answer === rightAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${name}!`);
      break;
    }
  }
};
