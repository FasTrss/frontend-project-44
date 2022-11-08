#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const isEven = (a) => (a % 2 === 0 ? 'yes' : 'no');

export const makeProgression = (
  firstProgression,
  stepProgression,
  lengthProgression,
  hiddenNumberIndex,
) => {
  const progression = [];
  let hiddenNumber = 0;
  for (let i = firstProgression; progression.length < lengthProgression; i += stepProgression) {
    progression.push(i);
    if (progression.length - 1 === hiddenNumberIndex) {
      hiddenNumber = i;
      progression[hiddenNumberIndex] = '..';
    }
  }
  return [progression.join(' '), hiddenNumber];
};

export const getLargsetGCD = (int1, int2) => {
  let answer = 0;
  const min = (int1 > int2 ? int2 : int1);
  for (let i = min; i > 0; i -= 1) {
    if (int1 % i === 0 && int2 % i === 0) {
      answer = i;
      break;
    }
  }
  return answer;
};

export const isPrime = (num) => {
  let rightAnswer = '';
  if (num === 1) {
    rightAnswer = 'no';
    return rightAnswer;
  }
  if (num % 2 === 0 && num > 2) {
    rightAnswer = 'no';
    return rightAnswer;
  }
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) {
      rightAnswer = 'no';
      return rightAnswer;
    }
  }
  rightAnswer = 'yes';
  return rightAnswer;
};

const parsed = (a) => parseInt(a, 10);
export const getAnswer = (firstInt, secondInt, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = parsed(firstInt) + parsed(secondInt);
      break;
    case '-':
      answer = firstInt - secondInt;
      break;
    case '*':
      answer = firstInt * secondInt;
      break;
    default:
  }
  return answer;
};
export function getRandomIntFromInterval(minim, maxim) {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function userAnswer() {
  const answerIs = readlineSync.question('Your answer: ');
  return answerIs;
}

const roundsCount = 3;
export const launchGame = (description, generateRound) => {
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = userAnswer();
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
