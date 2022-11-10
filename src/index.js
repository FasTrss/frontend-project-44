#!/usr/bin/env node

import readlineSync from 'readline-sync';

const roundsCount = 3;

const launchGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
