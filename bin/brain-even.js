#!/usr/bin/env node

import { sayHi } from "../src/cli.js";
import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!');
const name = sayHi();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 3; i += 1) {
    let num = 0;
    num = getRandomInt(15);
    console.log('Question: ' + num);
    const userAnswer = readlineSync.question('Your answer: ');
    const check1 = (num % 2 === 0 && userAnswer === 'yes');
    const check2 = (num % 2 !== 0 && userAnswer === 'no');
    if ((check1 === true) || (check2 === true)) {
        console.log('Correct!');
    } else {
        const rightAnswer = (num % 2 !== 0 ? 'no' : 'yes')
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${name}!`);
        break;
    }
}
console.log('Congratulations, '+ name + '!')